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
import axios from "../../api/axios";
import { useRef } from "react";
import { useEffect } from "react";

const SearchNIM = () => {
  const search = useRef("");
  const { value, setValue } = useValue();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios(`student?search=${search.current? search.current.value : ''}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <InputGroup w="60vw">
        <Input
          name="NIS"
          isRequired
          isReadOnly={value}
          defaultValue={value}
          onClick={onOpen}
          type="text"
        />
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
            <Input
              type="search"
              ref={search}
              defaultValue=""
              placeholder="search"
              onChange={getData}
            />
            <RadioGroup defaultValue="">
              <Stack
                mt="4"
                h="50vh"
                onChange={(e) => {
                  setValue(e.target.value);
                  onClose();
                }}
                spacing="4"
              >
                {data.map((item, index) => {
                  return <Radio key={index} value={item.NIS}>{item.NIS}</Radio>;
                })}
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
