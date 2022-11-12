import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {get_data} from "../Redux/App/actions";
import { Container } from '@chakra-ui/react';
import {OptionsTabs} from "../Components/OptionsTabs";

export const Extreme = () => {
     const dispatch = useDispatch();
     const data = useSelector((state) =>state.data);
    console.log(data);
    useEffect(()=>{
      dispatch(get_data("extreme"));
    },[]);

  return (
    <>
      <Container maxW={"86%"} h="85vh" bg="grey">
          <OptionsTabs data={data}/>
      </Container>
    </>
  )
};
