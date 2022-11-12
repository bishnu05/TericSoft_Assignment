import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { SingleCard } from "./SingleCard";

export const Cards = ({ tabName }) => {
  const tab = useSelector((state) => state.data);
  const tabNameData = tab?.data?.[tabName];

  return (
    <>
      <Container maxW="100%">
        <Text textAlign="left" fontSize="20px" pb="10px">Highlights</Text>
        <Flex gap="20px">
          {tabNameData?.map((ele, i) => (
            <SingleCard tabNameData={ele} key={i} tabName={tabName} />
          ))}
        </Flex>
      </Container>
    </>
  );
};
