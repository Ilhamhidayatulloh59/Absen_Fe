import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useRef } from "react";

const AddDates = ({ onAdd }) => {
  const date = useRef("");
  const jp = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClick = () => {
    onAdd({ date: date.current.value, time: jp.current.value });
    onClose();
  };

  function setDefaultValue() {
    const dayOfWeek = new Date(date.current ? date.current.value : "").getDay();

    switch (dayOfWeek) {
      case 0:
        if (jp.current) {
          jp.current.defaultValue = "5";
        }
        break;
      case 1:
        if (jp.current) {
          jp.current.defaultValue = "7";
        }
        break;
      case 2:
        if (jp.current) {
          jp.current.defaultValue = "7";
        }
        break;
      case 3:
        if (jp.current) {
          jp.current.defaultValue = "7";
        }
        break;
      case 4:
        if (jp.current) {
          jp.current.defaultValue = "5";
        }
        break;
      case 5:
        if (jp.current) {
          jp.current.defaultValue = "0";
        }
        break;
      case 6:
        if (jp.current) {
          jp.current.defaultValue = "7";
        }
        break;
      default:
        if (jp.current) {
          jp.current.defaultValue = "";
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
          <ModalCloseButton />
          <ModalBody>
            <Box bgColor="white" borderTopRadius="3xl">
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
                <Input type="number" w="60vw" ref={jp} />
              </Flex>
              <Button onClick={() => handleClick()}>add</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDates;
