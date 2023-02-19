import {
  Box,
  Icon,
  useMediaQuery,
  Flex,
  Center,
  Text,
  Circle,
} from "@chakra-ui/react";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const Menu = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const navigate = useNavigate();
  const MenuList = [
    { label: "Pulang" },
    { label: "Piket Jaros" },
    { label: "Piket Malam" },
    { label: "Sakit" },
    { label: "Alfa" },
    { label: "Izin" },
  ];

  const onNext = (item) => {
    navigate(`/input/${item}`);
  };

  return (
    <Center>
      {isMobile ? (
        <Box mt="4">
          <Text fontWeight="bold">Input</Text>
          <Box mt="2" boxShadow="base" p="2" borderRadius="sm">
            <Box w="90vw" justify="space-evenly" wrap="wrap">
              {MenuList.map((item) => {
                return (
                  <Flex
                    onClick={() => onNext(item.label)}
                    align="center"
                    m="3"
                    p="2"
                  >
                    <Circle bgColor="orange">
                      <Icon
                        p="2"
                        color="white"
                        w={10}
                        h={10}
                        as={IoAddOutline}
                      />
                    </Circle>
                    <Text ml="4" fontWeight="bold" fontSize="sm">
                      {item.label}
                    </Text>
                  </Flex>
                );
              })}
            </Box>
          </Box>
        </Box>
      ) : (
        "Mobile Only"
      )}
    </Center>
  );
};

export default Menu;
