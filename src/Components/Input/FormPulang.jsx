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
  Tag,
  TagLeftIcon,
  TagLabel,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { CgArrowsExchange } from "react-icons/cg";
import { useParams } from "react-router";
import useValue from "../../hooks/useValue";
import SearchNIM from "./SearchNim";
import { useState } from "react";
import SearchNama from "./SearchNama";
import axios from "../../api/axios";
import { useEffect } from "react";
import AddDates from "./AddDates";

const FormInputPulang = ({ label }) => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const { value, setValue } = useValue();
  const [searchBy, setSearchBy] = useState("NIS");
  const [data, setData] = useState([]);
  const params = useParams();
  const toast = useToast();
  var todayDate = new Date().toISOString().slice(0, 10);
  const [dates, setDates] = useState([]);

  const getData = async () => {
    try {
      const res = await axios(`student/${value}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  function handleMessage(message) {
    dates.push(message);
    setDates(dates);
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      data.date = formData.get("date");
      data.absen = label;
      data.alasan = formData.get("alasan");

      toast({
        title: "Succes",
        description: `${data.Nama} added`,
        status: "success",
        duration: 2000,
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Failed",
        description: `Try add again`,
        status: "error",
        duration: 2000,
      });
    }
    setValue("");
  };

  useEffect(() => {
    getData();
  }, [value]);

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
            <Flex w="90vw" justify="space-between">
              <Text fontWeight="bold">{`Input ${params.jenis}`}</Text>
              <Tag
                borderRadius="2xl"
                colorScheme="orange"
                onClick={() => setSearchBy(searchBy === "NIS" ? "Nama" : "NIS")}
              >
                <TagLeftIcon boxSize="16px" as={CgArrowsExchange} />
                <TagLabel>{searchBy === "NIS" ? "Nama" : "NIS"}</TagLabel>
              </Tag>
            </Flex>
            <Box w="90vw">
              {searchBy === "NIS" ? (
                <Flex mt="4" align="center" justify="space-between">
                  <FormLabel>NIS</FormLabel>
                  <SearchNIM />
                </Flex>
              ) : (
                <Flex mt="4" align="center" justify="space-between">
                  <FormLabel>{value ? "NIS" : "Nama"}</FormLabel>
                  <SearchNama />
                </Flex>
              )}
              {value ? (
                <>
                  <Flex mt="4" align="center" justify="space-between">
                    <FormLabel>Nama</FormLabel>
                    <Input
                      name="nama"
                      isReadOnly
                      type="text"
                      defaultValue={data?.Nama}
                      w="60vw"
                    />
                  </Flex>
                </>
              ) : null}
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
                <FormLabel>Alasan</FormLabel>
                <RadioGroup name="alasan" defaultValue="Sakit">
                  <Stack w="60vw" spacing={4} direction="row">
                    <Radio value="Sakit">Sakit</Radio>
                    <Radio value="Keluarga">Keluarga</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Flex mt="4"  justify="space-between">
                <FormLabel>Tasreh</FormLabel>
                <Box>
                {dates.map(item => {
                    return (
                        <Text>{item}</Text>
                    )
                })}
                  <AddDates onAdd={handleMessage} dates={dates} />
                </Box>
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
            </Box>
          </form>
        </Box>
      ) : (
        "Mobile Only"
      )}
    </Center>
  );
};

export default FormInputPulang;