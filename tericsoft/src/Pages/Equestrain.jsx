import { Container } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { OptionsTabs } from '../Components/OptionsTabs';
import { get_data } from '../Redux/App/actions';

export const Equestrain = () => {
   const dispatch = useDispatch();
   const data = useSelector((state)=>state.data);
   console.log(data);
   useEffect(()=>{
    dispatch(get_data("equestrain"));
   },[]);

  return (
    <>
      <Container maxW={"80%"} h="85vh" bg="grey">
         <OptionsTabs data={data} />
      </Container>
    </>
  )
}
