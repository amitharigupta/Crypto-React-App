import { API_URL } from '../main'
import { Container, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import ExchangeCard from './ExchangeCard'
import ErrorComponent from './ErrorComponent'

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }
    fetchExchanges();
  }, []);
  
  if(error) return <ErrorComponent message={"Error while fetching exchanges"} />

  return (
    <Container maxW={"container.xl"}>
      {
        loading ? 
        <Loader /> :
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
              exchanges && exchanges.map((i) => {
                return <ExchangeCard key={i.id} name={i.name} image={i.image} rank={i.trust_score_rank} url={i.url} country={i.country} />
              })
            }
          </HStack>
      }
    </Container>
  )
}

export default Exchanges