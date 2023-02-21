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
} from "@chakra-ui/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import useValue from "../../hooks/useValue";
import { useState } from "react";
import axios from "../../api/axios";
import { useEffect } from "react";
import DayDefault from "./Day";
import TimeDefault from "./Time";
import TimeCust from "./TimeCust";

const FormAddDate = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const { value, setValue, date, setDates, dates } = useValue();
  const [data, setData] = useState([]);
  const [time, setTime] = useState([]);
  const [cust, setCust] = useState(false);
  const [now, setNow] = useState(
    new Date(new Date(date).setDate(new Date(date).getDate() + dates.length))
      .toISOString()
      .slice(0, 10)
  );
  const params = useParams();
  const navigate = useNavigate();

  console.log(dates.length);

  const getData = async () => {
    try {
      const res = await axios.get(`student/${value}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      dates.push({
        day: document.getElementsByName("day")[0].value,
        date: document.getElementsByName("date")[0].value,
        time: time.length
          ? time.length
          : document.getElementsByName("time")[0].value,
        jp: time.join(', ')
      });
      dates.sort((a, b) => new Date(b.date) - new Date(a.date));
      setDates(dates);
      setCust(false);
      navigate(-1);
    } catch (err) {
      console.log(err);
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
          <Flex w="90vw" justify="space-between">
            <Text fontWeight="bold">{`Tanggal Tasreh`}</Text>
          </Flex>
          <Box w="90vw">
            <Flex mt="4" align="center" justify="space-between">
              <FormLabel>Tanggal</FormLabel>
              <Input
                name="date"
                isRequired
                type="date"
                w="60vw"
                defaultValue={now}
                onChange={(e) => setNow(e.target.value)}
              />
            </Flex>
            <Flex mt="4" align="center" justify="space-between">
              <FormLabel>Hari</FormLabel>
              <DayDefault date={now} />
            </Flex>
            <Flex mt="4" align="center" justify="space-between">
              {!cust ? (
                <>
                  <FormLabel>Jam</FormLabel>
                  <TimeDefault
                    jenis={params.jenis}
                    cust={setCust}
                    date={now}
                  />
                </>
              ) : (
                <>
                  <FormLabel>Jam Ke -</FormLabel>
                  <TimeCust setTime={setTime} />
                </>
              )}
            </Flex>
            <Flex mt="4" justify="end">
              <Circle
                as={Button}
                bgColor="orange"
                p="3"
                color="white"
                onClick={handleSubmit}
              >
                <Icon w={5} h={5} as={IoArrowForwardOutline} />
              </Circle>
            </Flex>
          </Box>
        </Box>
      ) : (
        "Mobile Only"
      )}
    </Center>
  );
};

export default FormAddDate;
