import { useEffect, useRef, useState } from "react";
import {
  Box,
  Image,
  Tag,
  Avatar,
  Icon,
  useMediaQuery,
  Flex,
  Center,
  VStack,
  Text,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const {auth} = useAuth()

  return (
    <Center>
      {isMobile ? (
        <VStack
          w="100vw"
          h="36"
          bgColor="orange"
          borderBottomRadius="3xl"
          boxShadow="base"
          justify='center'
          align='start'
        >
          <Text ml='4' fontSize='sm' fontWeight='bold'>Hi, Admin</Text>
          <Flex p='4' pt='-4'>
            <Avatar onClick={() => localStorage.removeItem('token')} />
            <Box ml='4'>
              <Text fontWeight='bold'>{auth.username}</Text>
              <Text fontSize='sm'>{auth.section}</Text>
            </Box>
          </Flex>
        </VStack>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default Profile;
