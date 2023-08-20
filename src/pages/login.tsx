import { Box, Button, Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";
import bll from "assets/images/bll.png";
import zadnjiTaxi from "assets/images/zadnjiTaxi.png";
import { InputField } from "components/login/inputField";
import { useRouter } from "next/router";

export const Login = () => {
  const router = useRouter();

  return (
    <Flex
      bg="gray.200"
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      position="fixed"
    >
      <Flex w="50%">
        <Image objectFit="cover" h="100vh" src={bll.src} alt="" />
      </Flex>
      {/* <Spacer /> */}
      <Flex bg="gray.200" w="50%" h="100vh" justify="center" align="center">
        <Flex
          direction="column"
          w="33.6875rem"
          h="45.3125rem"
          borderRadius="2.5rem"
          bg="white"
          p="2.75rem"
          boxShadow="2xl"
        >
          <Flex w="28.188rem" h="2.875rem">
            <Flex w="12.5rem" h="2rem">
              <Text textStyle="titleLight" fontSize="1.313rem">
                Dobrodošli u
              </Text>
              <Spacer />
              <Text
                textStyle="titleLight"
                fontSize="1.313rem"
                textColor="green.400"
              >
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
          <Image pl="0.25rem" src={zadnjiTaxi.src} alt="taxi_logo" w="20rem" />
          <Spacer />
          <Box mb="2.75rem">
            <InputField
              type="email"
              title="Unesite vaše korisničko ime ili email adresu"
              placeholder="Korisničko ime ili email"
            />

            <Box>
              <InputField
                type="password"
                title="Unesite vašu lozinku"
                placeholder="Lozinka"
              />
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
          </Box>

          <Button
            variant="loginButton"
            bgColor="green.400"
            onClick={() => router.push("/dashboard")}
          >
            <Text textStyle="titleLight" color="white">
              Prijavi se
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Box position="absolute" bottom="0">
        <Text textStyle="titleSmall">© BLTaxi 2023</Text>
      </Box>
    </Flex>
  );
};

export default Login;
