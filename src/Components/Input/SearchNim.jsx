import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useState } from "react";
import useValue from "../../hooks/useValue";
import { MdOutlineClose } from "react-icons/md";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import Scanner from "./Scanner";
import { Divider, Stack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";

const SearchNIM = () => {
  const { value, setValue } = useValue();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <InputGroup w="60vw">
        <Input name="NIS" isRequired isReadOnly={value} value={value} onClick={onOpen} type="text"/>
        <InputRightElement
          children={
            value ? (
              <MdOutlineClose onClick={() => setValue("")} />
            ) : (
              <Scanner />
            )
          }
        />
      </InputGroup>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>NIS</ModalHeader>
          <Divider />
          <ModalBody>
            <Input type="search" placeholder="search" />
            <RadioGroup defaultValue=''>
              <Stack mt="4" h="50vh" onChange={(e) => {setValue(e.target.value); onClose()}} spacing="4">
                <Radio value="2122.10.0001">2122.10.0001</Radio>
                <Radio value="2122.10.0002">2122.10.0002</Radio>
                <Radio value="2122.10.0010">2122.10.0010</Radio>
                <Radio value="2122.10.0040">2122.10.0040</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>
          <Divider />
          <ModalFooter>
              <Button variant="ghost" onClick={onClose} colorScheme="blue">
                Close
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchNIM;
