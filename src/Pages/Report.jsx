import {
  Box,
  useMediaQuery,
  Center,
  Text,
} from "@chakra-ui/react";
import Profile from "../Components/Profile";

const Report = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");

  return (
    <Center>
      {isMobile ? (
        <Box
          w="100vw"
          borderBottomRadius="3xl"
        >
          <Profile />
          <Text>Report</Text>
        </Box>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default Report;
