import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Box, Circle, Divider, Flex } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useRef } from "react";
import { useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import DayDefault from "./Day";
import TableDates from "./TableDates";

const AddDates = ({ onAdd, dates }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [date, setDate] = useState("");

  const time = useRef();

  function setDefaultValue() {
    const dayOfWeek = new Date(date).getDay();

    switch (dayOfWeek) {
      case 0:
        if (time.current) {
          time.current.defaultValue = 5;
        }
        break;
      case 1:
        if (time.current) {
          time.current.defaultValue = 7;
        }
        break;
      case 2:
        if (time.current) {
          time.current.defaultValue = 7;
        }
        break;
      case 3:
        if (time.current) {
          time.current.defaultValue = 7;
        }
        break;
      case 4:
        if (time.current) {
          time.current.defaultValue = 5;
        }
        break;
      case 5:
        if (time.current) {
          time.current.defaultValue = 0;
        }
        break;
      case 6:
        if (time.current) {
          time.current.defaultValue = 7;
        }
        break;
      default:
        if (time.current) {
          time.current.defaultValue = 0;
        }
        break;
    }
  }

  setDefaultValue();

  const handleClick = () => {
    dates.push({ date, time: document.getElementsByName("time")[0].value });
    onAdd(dates.sort((a, b) => new Date(b.date) - new Date(a.date)));
    onClose();
  };

  return (
    <>
      <TableDates onAdd={onAdd} dates={dates} />
      <Button w="60vw" variant="outline" colorScheme="orange" onClick={onOpen}>
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tanggal Tasreh</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <Box bgColor="white" borderTopRadius="3xl" m="4">
              <Flex mt="4" align="center" justify="space-between">
                <FormLabel>Tanggal</FormLabel>
                <Input
                  isRequired
                  type="date"
                  w="60vw"
                  onChange={(e) => setDate(e.target.value)}
                />
              </Flex>
              {date ? (
                <>
                  <Flex mt="4" align="center" justify="space-between">
                    <FormLabel>Hari</FormLabel>
                    <DayDefault date={date} />
                  </Flex>
                  <Flex mt="4" align="center" justify="space-between">
                    <FormLabel>Jam</FormLabel>
                    <Input type="number" w="60vw" name="time" ref={time} />
                  </Flex>
                  <Flex mt="4" justify="end">
                    <Circle
                      onClick={handleClick}
                      as={Button}
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDates;
