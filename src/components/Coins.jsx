import { API_URL } from '../main'
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import CoinCard from './CoinCard'
import ErrorComponent from './ErrorComponent'

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol = currency === 'inr' ? "₹" : currency === "eur" ? "€" : "$";


  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(130).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }
    fetchCoins();
  }, [currency, page]);
  
  if(error) return <ErrorComponent message={"Error while fetching coins"} />

  return (
    <Container maxW={"container.xl"}>
      {
        loading ? 
        <Loader /> :
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR (₹)</Radio>
              <Radio value={"eur"}>EUR (€)</Radio>
              <Radio value={"usd"}>USD ($)</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
              coins && coins.map((i) => {
                return <CoinCard key={i.id} id={i.id} name={i.name} image={i.image} price={i.current_price} symbol={i.symbol} currencySymbol={currencySymbol} />
              })
            }
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {
              btns.map((item, index) => {
                return <Button key={index} bgColor={"balckAlpha.900"} onClick={() => changePage(index + 1)}>{index + 1}</Button>
              })
            }
          </HStack>
          </>
      }
    </Container>
  )
}

export default Coins