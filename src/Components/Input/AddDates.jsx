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
import { IoArrowForwardOutline } from "react-icons/io5";

const AddDates = ({ onAdd, dates, tgl }) => {
  const date = useRef("");
  const timeRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  var todayDate = new Date(new Date(tgl).setDate(new Date(tgl).getDate() + dates.length)).toISOString().slice(0, 10);

  const handleClick = () => {
    onAdd({ date: date.current.value, time: timeRef.current.value });
    onClose();
  };

  function setDefaultValue() {
    const dayOfWeek = new Date(date.current ? date.current.value : "").getDay();

    switch (dayOfWeek) {
      case 0:
        if (timeRef.current) {
          timeRef.current.defaultValue = 5;
        }
        break;
      case 1:
        if (timeRef.current) {
          timeRef.current.defaultValue = 7;
        }
        break;
      case 2:
        if (timeRef.current) {
          timeRef.current.defaultValue = 7;
        }
        break;
      case 3:
        if (timeRef.current) {
          timeRef.current.defaultValue = 7;
        }
        break;
      case 4:
        if (timeRef.current) {
          timeRef.current.defaultValue = 5;
        }
        break;
      case 5:
        if (timeRef.current) {
          timeRef.current.defaultValue = 0;
        }
        break;
      case 6:
        if (timeRef.current) {
          timeRef.current.defaultValue = 7;
        }
        break;
      default:
        if (timeRef.current) {
          timeRef.current.defaultValue = 0
        }
        break;
    }
  }

  setDefaultValue();

  return (
    <>
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
                  ref={date}
                  defaultValue={todayDate}
                  isRequired
                  type="date"
                  w="60vw"
                />
              </Flex>
              <Flex mt="4" align="center" justify="space-between">
                <FormLabel>Jam</FormLabel>
                <Input type="number" w="60vw" ref={timeRef} />
              </Flex>
              <Flex mt="4" justify="end">
                <Circle
                  onClick={() => handleClick()}
                  as={Button}
                  bgColor="orange"
                  p="3"
                  color="white"
                >
                  <Icon w={5} h={5} as={IoArrowForwardOutline} />
                </Circle>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDates;
