import {
  Box,
  useMediaQuery,
  Flex,
  Center,
  Text,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import useValue from "../../hooks/useValue";
import Scanner from "./Scanner";
import { MdOutlineClose } from "react-icons/md";

const FormInput = ({ label }) => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const params = useParams();
  var todayDate = new Date().toISOString().slice(0, 10);
  const { value, setValue } = useValue();

  return (
    <Center>
      {isMobile ? (
        <Box
          w="100vw"
          p="4"
          h="90vh"
          mt="10vh"
          bgColor="white"
          borderTopRadius="3xl"
        >
          <Text fontWeight="bold">{`Input ${params.jenis}`}</Text>
          <Box w="90vw">
            <Flex mt="4" align="center" justify="space-between">
              <FormLabel>Tanggal</FormLabel>
              <Input type="date" w="60vw" defaultValue={todayDate} />
            </Flex>
            <Flex mt="4" align="center" justify="space-between">
              <FormLabel>Absen</FormLabel>
              <Input isDisabled type="text" value={label} w="60vw" />
            </Flex>
            <Flex mt="4" align="center" justify="space-between">
              <FormLabel>NIS</FormLabel>
              <InputGroup w="60vw">
                <Input value={value} type="text" />
                <InputRightElement children={value ? <MdOutlineClose onClick={() => setValue('')}/> : <Scanner />} />
              </InputGroup>
            </Flex>
          </Box>
        </Box>
      ) : (
        "Mobile Only"
      )}
    </Center>
  );
};

export default FormInput;
