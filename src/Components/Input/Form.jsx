import {
  Box,
  useMediaQuery,
  Flex,
  Center,
  Text,
  FormLabel,
  Input,
  Button,
  Circle,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useParams } from "react-router";
import useValue from "../../hooks/useValue";
import SearchNIM from "./SearchNim";

const FormInput = ({ label }) => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const { value, setValue } = useValue();
  const params = useParams();
  const toast = useToast()
  var todayDate = new Date().toISOString().slice(0, 10);

  const handleSubmit = async (event) => {
      try {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        for (const [key] of formData.entries()) {
          if (!data[key]) {
            data[key] = formData.getAll(key)[0];
          }
        }
      console.log(data);
      toast({
        title: "Succes",
        description: `${data.nama} added`,
        status: "success",
        duration: 2000,
      })
    } catch (err) {
        console.log(err);
        toast({
          title: "Failed",
          description: `Try add again`,
          status: 'error',
          duration: 2000,
        })
    }
    setValue("");
  };

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
          <form onSubmit={handleSubmit}>
            <Text fontWeight="bold">{`Input ${params.jenis}`}</Text>
            <Box w="90vw">
              <Flex mt="4" align="center" justify="space-between">
                <FormLabel>Tanggal</FormLabel>
                <Input
                  name="date"
                  isRequired
                  type="date"
                  w="60vw"
                  defaultValue={todayDate}
                />
              </Flex>
              <Flex mt="4" align="center" justify="space-between">
                <FormLabel>Absen</FormLabel>
                <Input
                  name="absen"
                  isReadOnly
                  type="text"
                  value={label}
                  w="60vw"
                />
              </Flex>
              <Flex mt="4" align="center" justify="space-between">
                <FormLabel>NIS</FormLabel>
                <SearchNIM />
              </Flex>
              {value ? (
                <>
                  <Flex mt="4" align="center" justify="space-between">
                    <FormLabel>Nama</FormLabel>
                    <Input
                      name="nama"
                      isReadOnly
                      type="text"
                      defaultValue={"Ilham"}
                      w="60vw"
                    />
                  </Flex>
                  <Flex mt="4" align="center" justify="space-between">
                    <FormLabel>Kelas</FormLabel>
                    <Input
                      name="kelas"
                      isReadOnly
                      type="text"
                      defaultValue={"1A KUI Pa"}
                      w="60vw"
                    />
                  </Flex>
                  <Flex mt="4" justify="end">
                    <Circle
                      as={Button}
                      type="submit"
                      bgColor="orange"
                      p="3"
                      color="white"
                    >
                      <Icon w={5} h={5} as={IoArrowForwardOutline} />
                    </Circle>
                  </Flex>
                </>
              ) : null}
            </Box>
          </form>
        </Box>
      ) : (
        "Mobile Only"
      )}
    </Center>
  );
};

export default FormInput;
