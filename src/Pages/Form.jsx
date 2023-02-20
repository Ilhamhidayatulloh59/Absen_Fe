import { Box, useMediaQuery, Center } from "@chakra-ui/react";
import FormInput from "../Components/Input/Form";
import { useParams } from "react-router";
import FormInputPulang from "../Components/Input/FormPulang";
import FormInputSakit from "../Components/Input/FormSakit";

const Form = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const params = useParams();

  return (
    <Center>
      {isMobile ? (
        <Box w="100vw" h="100vh" bgColor="orange">
          {params.jenis === "Pulang" ? (
            <FormInputPulang label={params.jenis} />
          ) : params.jenis === "Sakit" ? (
            <FormInputSakit label={params.jenis} />
          ) : (
            <FormInput label={params.jenis} />
          )}
        </Box>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default Form;
