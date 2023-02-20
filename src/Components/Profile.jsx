import {
  Box,
  Avatar,
  useMediaQuery,
  Flex,
  Center,
  Text,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const { auth } = useAuth();

  return (
    <Center>
      {isMobile ? (
        <Box w="100vw" justify="center" align="start">
          <Box bgColor="orange" w="100vw" h='10' borderBottomRadius="xl" />
          <Center mt='-8' >
            <Box
              boxShadow="base"
              w="90vw"
              zIndex="2"
              position="relative"
              bgColor="white"
              p='3'
              borderBottom='4px'
              borderBottomColor='orange'
              borderRadius='md'
            >
              <Text ml="4" fontSize="sm" fontWeight="bold">
                Hai, Admin !
              </Text>
              <Flex p="3">
                <Avatar/>
                <Box ml="4">
                  <Text fontWeight="bold">{auth.username}</Text>
                  <Text fontSize="sm">{auth.section}</Text>
                </Box>
              </Flex>
            </Box>
          </Center>
        </Box>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default Profile;
