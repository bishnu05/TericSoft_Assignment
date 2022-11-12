import {Container} from "@chakra-ui/react"
import React from 'react'
import { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {OptionsTabs} from "../Components/OptionsTabs";
import {get_data} from "../Redux/App/actions";
export const Cycling = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.data);
  console.log(data,"data");

 useEffect(()=>{
  dispatch(get_data("cycling"));
 },[])
  return (
    <>
      <Container maxW={"80%"} h="85vh" bg={"grey"}>
         <OptionsTabs data={data}/>
      </Container>
    </>
  )
};
