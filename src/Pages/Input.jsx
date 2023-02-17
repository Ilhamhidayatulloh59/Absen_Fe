import { useEffect, useRef, useState } from "react";
import {
  Box,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";
import Profile from "../Components/Profile";
import Menu from "../Components/Input/Menu";

const Input = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");

  return (
    <Center>
      {isMobile ? (
        <Box
          w="100vw"
          borderBottomRadius="3xl"
        >
          <Profile />
          <Menu />
        </Box>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default Input;
