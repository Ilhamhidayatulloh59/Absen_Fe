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
import { useParams, useNavigate } from "react-router";
import useValue from "../../hooks/useValue";
import SearchNIM from "./SearchNim";
import { useState } from "react";
import SearchNama from "./SearchNama";
import axios from "../../api/axios";
import { useEffect } from "react";
import TableDates from "./TableDates";
import DayDefault from "./Day";

const FormInputPulang = ({ label }) => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const { value, setValue, date, setDate, dates, setDates } = useValue();
  const [searchBy, setSearchBy] = useState("NIS");
  const [data, setData] = useState([]);
  const params = useParams();
  const toast = useToast();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await axios(`student/${value}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onAdd = () => {
    navigate("/Input/Pulang/add");
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      data.date = formData.get("date");
      data.absen = label;
      data.alasan = formData.get("alasan");
      data.dates = dates;
      console.log(data);

      toast({
        title: "Succes",
        description: `${data.Nama} added`,
        status: "success",
        duration: 2000,
      });

      setValue("");
      setDates([]);
      document.getElementsByName("NIS")[0].value = "";
    } catch (err) {
      console.log(err);
      toast({
        title: "Failed",
        description: `${err.response.message}`,
        status: "error",
        duration: 2000,
      });
    }
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
                      isReadOnly={value}
                      isRequired
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
                  defaultValue={date}
                  onChange={(e) => setDate(e.target.value)}
                  w="60vw"
                />
              </Flex>
              <Flex mt="4" align="center" justify="space-between">
                <FormLabel>Hari</FormLabel>
                <DayDefault date={date} />
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
              <Flex mt="4" justify="space-between">
                <FormLabel>Tasreh</FormLabel>
                <Box>
                  <TableDates />
                  <Button variant="ghost" colorScheme="orange" onClick={onAdd}>
                    New
                  </Button>
                </Box>
              </Flex>
              {dates.length ? (
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

export default FormInputPulang;
