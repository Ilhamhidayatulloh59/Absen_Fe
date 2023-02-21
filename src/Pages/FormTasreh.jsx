import { Box, useMediaQuery, Center } from "@chakra-ui/react";
import FormAddDate from "../Components/Input/FormAddDate";

const FormTasreh = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");

  return (
    <Center>
      {isMobile ? (
        <Box w="100vw" h="100vh" bgColor="orange">
          <FormAddDate/>
        </Box>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default FormTasreh;
