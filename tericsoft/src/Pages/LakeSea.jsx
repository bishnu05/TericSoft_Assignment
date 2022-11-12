import { Container } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OptionsTabs } from '../Components/OptionsTabs'
import { get_data } from '../Redux/App/actions'

export const LakeSea = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.data)
    console.log(data);
   useEffect(()=>{
    dispatch(get_data("lakesea"))
   },[])
   
  return (
    <>
      <Container maxW={"86%"} h="86vh" bg="grey">
        <OptionsTabs data={data} />
      </Container>
    </>
  )
}
