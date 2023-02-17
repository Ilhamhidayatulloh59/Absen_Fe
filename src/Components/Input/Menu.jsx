import { useEffect, useRef, useState } from "react";
import {
  Box,
  Icon,
  useMediaQuery,
  Flex,
  Center,
  VStack,
  Text,
  Circle,
  HStack,
} from "@chakra-ui/react";
import { IoAddOutline } from "react-icons/io5";

const Menu = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");

  const MenuList = [
    { label: "Piket Jaros" },
    { label: "Data Izin"},
    { label: "Data Alfa"},
    { label: "Data Sakit"}
  ];

  return (
    <Center>
      {isMobile ? (
        <Box mt="4" bgColor="gray.100" p="2" borderRadius="2xl">
          <Text fontWeight="bold">Input</Text>
          <Box w="90vw" justify="space-evenly" wrap="wrap" mt="4">
            {MenuList.map((item) => {
              return (
                <Flex align='center' m="3" p='2'>
                  <Circle bgColor="orange">
                    <Icon p="2" color="white" w={10} h={10} as={IoAddOutline} />
                  </Circle>
                  <Text ml='4' fontWeight="bold" fontSize="sm">
                    {item.label}
                  </Text>
                </Flex>
              );
            })}
          </Box>
        </Box>
      ) : (
        "Mobile Only"
      )}
    </Center>
  );
};

export default Menu;
