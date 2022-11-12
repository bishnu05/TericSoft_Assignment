import React from 'react'
import {Link,useLocation} from "react-router-dom";
import {Box,Container,Flex,Text} from "@chakra-ui/react";
import "../App.css";
export const Navbar = () => {
   const location = useLocation()

  return (
    <Container maxWidth={"100%"}  mb="10px" bgColor={"skyblue"}>
        <Flex w="86%" justifyContent="space-between" m="auto">
           <Box className={location.pathname==="/featured"? "featured" : null} w="105px" mt="10px" mb="10px">
            <Text fontSize="30px" mt="13px">
            <i class="fa-regular fa-star"></i>
            </Text>
            <Link to="/featured">
                <Text mt="-5px">Feature</Text>
            </Link>
           </Box>

           <Box className={location.pathname==="/aquatics"? "aquatics" : null} w="105px" mt="10px" mb="10px">
            <Text fontSize="30px" mt="13px">
                <i class="fa-solid fa-person-swimming"></i>
            </Text>
            <Link to="/aquatics">
                <Text mt="-5px">Aquatics</Text>
            </Link>
           </Box>

           <Box className={location.pathname==="/"? "cycling" : null} w="105px" mt="10px" mb="10px">
            <Text fontSize="30px" mt="13px">
                <i class="fa-sharp fa-solid fa-person-biking"></i>
            </Text>
            <Link to="/">
                <Text mt="-5px">Cycling</Text>
            </Link>
           </Box>

           <Box className={location.pathname==="/armoury"? "armoury" : null} w="105px" mt="10px" mb="10px">
            <Text fontSize="30px" mt="13px">
                <i class="fa-solid fa-person-rifle"></i>
            </Text>
            <Link to="/armoury">
                <Text mt="-5px">Armoury</Text>
            </Link>
           </Box>

           <Box className={location.pathname==="/extreme"? "extreme" : null} w="105px" mt="10px" mb="10px">
            <Text fontSize="30px" mt="13px">
                <i class="fa-solid fa-hill-rockslide"></i>
            </Text>
            <Link to="/extreme">
                <Text mt="-5px">Extreme</Text>
            </Link>
           </Box>

           <Box className={location.pathname==="/golf"? "golf" : null} w="105px" mt="10px" mb="10px">
            <Text fontSize="30px" mt="13px">
                <i class="fa-solid fa-golf-ball-tee"></i>
            </Text>
            <Link to="/golf">
                <Text mt="-5px">Golf</Text>
            </Link>
           </Box>

           <Box className={location.pathname==="/gymnastics"? "gymnastics" : null} w="105px" mt="10px" mb="10px">
            <Text fontSize="30px" mt="13px">
                <i class="fa-solid fa-dumbbell"></i>
            </Text>
            <Link to="/gymnastics">
                <Text mt="-5px">Gymnastics</Text>
            </Link>
           </Box>
            
           <Box className={location.pathname==="/equestrain"? "equestrain" : null} w="105px" mt="10px" mb="10px">
            <Text fontSize="30px" mt="13px">
                <i class="fa-solid fa-horse"></i>
            </Text>
            <Link to="/equestrain">
                <Text mt="-5px">Equestrain</Text>
            </Link>
           </Box>

           <Box className={location.pathname==="/lakesea"? "lakesea" : null} w="105px" mt="10px" mb="10px">
            <Text fontSize="30px" mt="13px">
                <i class="fa-solid fa-water"></i>
            </Text>
            <Link to="/lakesea">
                <Text mt="-5px">Lake & Sea</Text>
            </Link>
           </Box>

        </Flex>
    </Container>
  )
}
