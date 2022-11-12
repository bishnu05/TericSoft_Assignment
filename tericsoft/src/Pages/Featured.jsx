import React from 'react'
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {get_data} from "../Redux/App/actions";
import {Container} from "@chakra-ui/react";
import {OptionsTabs} from "../Components/OptionsTabs";
export const Featured = () => {
    const dispatch = useDispatch()
   const data = useSelector((state)=>state.data)
   console.log(data);
   useEffect(()=>{
    dispatch(get_data("featured"))
   },[])

  return (
    <>
    <Container maxW={"86%"} h="85vh" bg="grey">
       <OptionsTabs data={data} />
    </Container>
    </>
  )
}
