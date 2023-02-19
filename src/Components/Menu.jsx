import {
  Box,
  Icon,
  useMediaQuery,
  Flex,
  Center,
  VStack,
  Text,
  Circle,
} from "@chakra-ui/react";
import {
  IoReceiptSharp,
  IoPersonAddSharp,
  IoSettingsSharp,
  IoPersonCircleSharp,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");

  const MenuList = [
    { label: "input", icon: IoPersonAddSharp, colour: "orange" },
    { label: "report", icon: IoReceiptSharp, colour: "green" },
    { label: "setting", icon: IoSettingsSharp, colour: "pink" },
    { label: "profile", icon: IoPersonCircleSharp, colour: "blue" },
  ];

  return (
    <Center>
      {isMobile ? (
        <Box mt="4">
          <Text fontWeight="bold">Main Feature</Text>
          <Box mt="2" p="2" boxShadow="base" borderRadius="md">
            <Flex w="90vw" justify="space-evenly" wrap="wrap" mt="4">
              {MenuList.map((item, index) => {
                return (
                  <VStack
                    key={index}
                    w="20vw"
                    mb="3"
                    as={Link}
                    to={`/${item.label}`}
                  >
                    <Circle bgColor="gray.50">
                      <Icon p="2" color={item.colour} w={10} h={10} as={item.icon} />
                    </Circle>
                    <Text fontSize="sm">
                      {item.label}
                    </Text>
                  </VStack>
                );
              })}
            </Flex>
          </Box>
        </Box>
      ) : (
        "Mobile Only"
      )}
    </Center>
  );
};

export default Menu;
