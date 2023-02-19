import {
  Box,
  Icon,
  useMediaQuery,
  Flex,
  Center,
  Text,
  Circle,
  VStack,
} from "@chakra-ui/react";
import {
  FcHome,
  FcDepartment,
  FcNightPortrait,
  FcManager,
  FcPortraitMode,
  FcDisapprove,
} from "react-icons/fc";
import { useNavigate } from "react-router";

const Menu = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const navigate = useNavigate();
  const MenuList = [
    { label: "Pulang", icon: FcHome },
    { label: "Piket Jaros", icon: FcManager },
    { label: "Piket Malam", icon: FcNightPortrait },
    { label: "Sakit", icon: FcDepartment },
    { label: "Alfa", icon: FcDisapprove },
    { label: "Izin", icon: FcPortraitMode },
  ];

  const onNext = (item) => {
    navigate(`/input/${item}`);
  };

  return (
    <Center>
      {isMobile ? (
        <Box mt="4">
          <Text fontWeight="bold">Input Feature</Text>
          <Box mt="2" p="2" boxShadow="base" borderRadius="md">
            <Flex w="90vw" justify="space-evenly" wrap="wrap" mt="4">
              {MenuList.map((item, index) => {
                return (
                  <VStack
                    key={index}
                    w="30vw"
                    mb="3"
                    onClick={() => onNext(item.label)}
                  >
                    <Circle bgColor="gray.50">
                      <Icon
                        p="2"
                        color={item.colour}
                        w={10}
                        h={10}
                        as={item.icon}
                      />
                    </Circle>
                    <Text fontSize="sm">{item.label}</Text>
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
