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
import SearchPenyakit from "./SearchPenyakit";
import DayDefault from "./Day";
import TimeDefault from "./Time";
import TimeCust from "./TimeCust";

const FormInputSakit = ({ label }) => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const { value, setValue, date, setDate } = useValue();
  const [searchBy, setSearchBy] = useState("NIS");
  const [data, setData] = useState([]);
  const [time, setTime] = useState([]);
  const [cust, setCust] = useState(false);
  const params = useParams();
  const toast = useToast();
  const [penyakit, setPenyakit] = useState("");

  const getData = async () => {
    try {
      const res = await axios(`student/${value}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onAdd = (item) => {
    setPenyakit(item);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      data.date = formData.get("date");
      data.absen = formData.get("absen");
      data.penyakit = penyakit;
      data.jam = time.length ? time.length : formData.get("time")
      data.jp = time.join(', ')
      console.log(data);

      toast({
        title: "Succes",
        description: `${data.Nama} added`,
        status: "success",
        duration: 2000,
      });
      setValue("");
      setCust(false)
      setPenyakit("");
    } catch (err) {
      console.log(err);
      toast({
        title: "Failed",
        description: `Try add again`,
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
              <Flex mt="4" align="center" justify="space-between">
                <FormLabel>Tanggal</FormLabel>
                <Input
                  name="date"
                  isRequired
                  type="date"
                  w="60vw"
                  defaultValue={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Flex>
              <Flex mt="4" align="center" justify="space-between">
                <FormLabel>Hari</FormLabel>
                <DayDefault date={date} />
              </Flex>
              <Flex mt="4" align="center" justify="space-between">
                {!cust ? (
                  <>
                    <FormLabel>Jam</FormLabel>
                    <TimeDefault cust={setCust} date={date} />
                  </>
                ) : (
                  <>
                    <FormLabel>Jam Ke -</FormLabel>
                    <TimeCust setTime={setTime} />
                  </>
                )}
              </Flex>
              <Flex mt="4" align="center" justify="space-between">
                <FormLabel>Absen</FormLabel>
                <Input
                  name="absen"
                  isReadOnly
                  type="text"
                  defaultValue={label}
                  w="60vw"
                />
              </Flex>
              <Flex mt="4" align="center" justify="space-between">
                <FormLabel>Penyakit</FormLabel>
                <SearchPenyakit onAdd={onAdd} penyakit={penyakit} />
              </Flex>
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
                  <Flex mt="4" align="center" justify="space-between">
                    <FormLabel>Kelas</FormLabel>
                    <Input
                      name="kelas"
                      isReadOnly
                      type="text"
                      defaultValue={data?.pondok}
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

export default FormInputSakit;
