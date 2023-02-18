import {
  Box,
  useMediaQuery,
  Center,
  Text,
} from "@chakra-ui/react";
import Name from "../Components/Profile";

const Profile = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");

  return (
    <Center>
      {isMobile ? (
        <Box
          w="100vw"
          borderBottomRadius="3xl"
        >
          <Name />
          <Text>Profile</Text>
        </Box>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default Profile;
