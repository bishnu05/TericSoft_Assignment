import React from 'react'
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import { useEffect } from 'react';
import { useState } from 'react';
import { Cards } from './Cards';

export const OptionsTabs = ({data}) => {
    const options = data?.options;
    const [tabName,setTabName] = useState("")
    
    useEffect(()=>{
      setTabName(options?.[0])
    },[options])
    console.log(options);

  return (
    <>
      <Tabs w="86%" m="auto">
         <TabList>
          { options?.map((ele,i)=>(
              <Tab key={i} onClick={()=> setTabName(ele)} m="auto">
                {ele}
              </Tab>
            ))}
         </TabList>
         <TabPanels>
           {options?.map((item,i)=>(
              <TabPanel key={i}>
                <Cards tabName={tabName}/>
              </TabPanel>
           ))}
         </TabPanels>
      </Tabs>
    </>
  )
}
