import {
  Box,
  useMediaQuery,
  Center,
  Text,
} from "@chakra-ui/react";
import Profile from "../Components/Profile";
import MenuSetting from "../Components/Setting/Menu";

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
          <MenuSetting/>
        </Box>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default Setting;
