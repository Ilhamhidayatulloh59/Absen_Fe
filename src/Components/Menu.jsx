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
} from "@chakra-ui/react";
import { IoReceiptOutline, IoPersonAddOutline, IoSettingsOutline, IoPersonCircleOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'

const Menu = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");

  const MenuList = [
    { label: "input", icon: IoPersonAddOutline },
    { label: "report", icon: IoReceiptOutline },
    { label: "setting", icon: IoSettingsOutline },
    { label: "profile", icon: IoPersonCircleOutline }
  ];

  return (
    <Center>
      {isMobile ? (
        <Box mt="4" bgColor="gray.100" p="2" borderRadius="2xl">
          <Text fontWeight="bold">Main Feature</Text>
          <Flex w="90vw" justify="space-evenly" wrap="wrap" mt="4">
            {MenuList.map((item, index) => {
              return (
                <VStack key={index} w="20vw" mb="3" as={Link} to={`/${item.label}`} >
                  <Circle bgColor="orange">
                    <Icon p="2" color="white" w={10} h={10} as={item.icon} />
                  </Circle>
                  <Text fontWeight="bold" fontSize="sm">
                    {item.label}
                  </Text>
                </VStack>
              );
            })}
          </Flex>
        </Box>
      ) : (
        "Mobile Only"
      )}
    </Center>
  );
};

export default Menu;
