import { useEffect, useRef, useState } from "react";
import {
  Box,
  useMediaQuery,
  Center,
  Text,
} from "@chakra-ui/react";
import Profile from "../Components/Profile";

const Setting = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");

  return (
    <Center>
      {isMobile ? (
        <Box
          w="100vw"
          borderBottomRadius="3xl"
        >
          <Profile />
          <Text>Setting</Text>
        </Box>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default Setting;
