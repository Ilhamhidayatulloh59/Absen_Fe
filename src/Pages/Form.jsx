import {
  Box,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";
import FormInput from "../Components/Input/Form";
import { useParams } from "react-router";

const Form = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const params = useParams()

  return (
    <Center>
      {isMobile ? (
        <Box
            w="100vw" h="100vh" bgColor="orange"
        >
            <FormInput label={params.jenis}/>
        </Box>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default Form;
