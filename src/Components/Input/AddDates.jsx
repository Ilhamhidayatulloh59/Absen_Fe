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
import React, { useState } from "react";
import { useRef } from "react";

const AddDates = ({ onAdd, dates }) => {
  const date = useRef("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [maxDate, setMaxDate] = useState(new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().slice(0, 10))
  const MAX = new Date(maxDate).setDate(new Date(maxDate).getDate() + 1);
  var todayDate = new Date(MAX).toISOString().slice(0, 10);
  
  const handleClick = () => {
      onAdd(date.current.value);
      onClose();
      dates.sort((a, b) => new Date(b) - new Date(a))
      setMaxDate(dates[0])
  };

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
                  isRequired
                  type="date"
                  w="60vw"
                  defaultValue={todayDate}
                />
              </Flex>
              <Button onClick={handleClick}>add</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDates;
