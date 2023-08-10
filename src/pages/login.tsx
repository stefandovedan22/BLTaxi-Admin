import { Box, Button, Flex, Input, Link, Spacer, Text } from "@chakra-ui/react";
import { SocketAddress } from "net";
import { useRouter } from "next/router";
import React from "react";

export const Login = () => {
  const router = useRouter();

  return (
    <Flex bg="gray.200" h="100vh" align="center" justify="center">
      <Flex
        direction="column"
        w="539px"
        h="741px"
        borderRadius="40px"
        bg="white"
        p="44px"
      >
        <Flex w="451px" h="46px">
          <Flex w="201px" h="32px">
            <Text textStyle="titleLight" fontSize="21px">
              Dobrodošli u
            </Text>
            <Spacer />
            <Text textStyle="titleLight" fontSize="21px" textColor="green.400">
              BLTaxi
            </Text>
          </Flex>
          <Spacer />
          <Box>
            <Text textStyle="titleSmall" textColor="gray.500">
              Nemate nalog?
            </Text>
            <Link textStyle="titleSmall" textColor="green.400">
              Pomoć
            </Link>
          </Box>
        </Flex>
        <Text textStyle="titleBold">Prijava</Text>
        <Spacer />
        <Box>
          <Text textStyle="titleLight">
            Unesite vaše korisničko ime ili email adresu
          </Text>
          {/* Napraviti custom input od flexa */}
          <Input h="57px" placeholder="Korisničko ime ili email"></Input>
        </Box>
        <Box>
          <Text textStyle="titleLight">Unesite vašu lozinku</Text>
          <Input h="57px" placeholder="lozinka"></Input>
          <Flex>
            <Spacer />
            <Link>
              <Text textStyle="titleSmall" textColor="green.600">
                Zaboravili ste lozinku?
              </Text>
            </Link>
          </Flex>
        </Box>
        <Spacer />
        <Button
          bgColor="green.400"
          onClick={() => router.push("/dashboard")}
          mb="35px"
        >
          <Text textStyle="titleLight" color="white">
            Prijavi se
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
