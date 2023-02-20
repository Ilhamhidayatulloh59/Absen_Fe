import {
  Box,
  Icon,
  useMediaQuery,
  Center,
  Text,
  Circle,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  IoMailOutline,
  IoBagCheckOutline,
  IoPowerOutline,
} from "react-icons/io5";

const MenuSetting = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  return (
    <Center>
      {isMobile ? (
        <Box mt="4">
          <Text fontWeight="bold">Setting Feature</Text>
          <Box mt="2" p="2" boxShadow="base" borderRadius="md">
            <VStack
              spacing="3"
              align="start"
              w="90vw"
              justify="space-evenly"
              wrap="wrap"
            >
              <HStack
                color="gray"
                borderBottom="1px"
                borderBottomColor="gray.100"
                w="full"
              >
                <Circle>
                  <Icon p="2" w={10} h={10} as={IoMailOutline} />
                </Circle>
                <Text fontSize="sm">Ubah Email</Text>
              </HStack>
              <HStack
                color="gray"
                borderBottom="1px"
                borderBottomColor="gray.100"
                w="full"
              >
                <Circle>
                  <Icon p="2" w={10} h={10} as={IoBagCheckOutline} />
                </Circle>
                <Text fontSize="sm">Ubah Password</Text>
              </HStack>
              <HStack
                color="gray"
                borderBottom="1px"
                borderBottomColor="gray.100"
                w="full"
                onClick={() => localStorage.removeItem("token")} 
              >
                <Circle>
                  <Icon p="2" w={10} h={10} as={IoPowerOutline} />
                </Circle>
                <Text fontSize="sm">Keluar</Text>
              </HStack>
            </VStack>
          </Box>
        </Box>
      ) : (
        "Mobile Only"
      )}
    </Center>
  );
};

export default MenuSetting;
