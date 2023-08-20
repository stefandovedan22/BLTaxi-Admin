import { Box, Input, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { InputFieldI } from "interfaces/inputField";

export const InputField = (props: InputFieldI) => {
  return (
    <Box h="5.75rem" mt="1rem">
      <Text textStyle="titleLight" mb="0.4rem">
        {props.title}
      </Text>
      <Input
        variant="loginInput"
        placeholder={props.placeholder}
        type={props.type}
      ></Input>
    </Box>
  );
};
