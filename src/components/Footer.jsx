import React from 'react'
import { Avatar, Box, VStack, Stack, Text } from '@chakra-ui/react'
import AvatarImg from '../assets/amit-logo.jpeg'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"48"} py={["16", "8"]}>
        <Stack direction={["column", "row"]} h={"full"} alignItems="center" >
            <VStack w={"full"} alignItems={["center", "flex-start"]}>
                <Text fontWeight={"bold"}>About Us</Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]}>We are the best at crypto trading app in India. we provide guidance at a very reasonable price.</Text>
            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4", "0"]} src={AvatarImg} />
                <Text>Our Founder</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer