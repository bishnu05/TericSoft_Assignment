import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const SingleCard = ({tabNameData,tabName}) => {
     
  return (
     <Box border="1px solid black">
        <Image src={tabNameData.image} alt=""/>
        <Box mt="-70px">
            <Text textAlign="left" fontSize="25px" pl="6px">Day {tabNameData.day} {tabName}</Text>
            <Flex justifyContent="space-around" w="60%" opacity="0.5" mt="5px">
                <Text bg="black" color="white" p="3px 10px" rounded={"md"}>
                    {tabNameData.level}
                </Text>
                <Text bg={"black"} color="white" p="3px 10px" rounded={"md"}>
                    {tabNameData.footage}
                </Text>
            </Flex>
        </Box>
     </Box>
    
  )
}
