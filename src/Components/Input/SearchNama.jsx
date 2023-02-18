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
import { Divider, Stack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { useRef } from "react";
import axios from "../../api/axios";
import { useEffect } from "react";

const SearchNama = () => {
  const search = useRef("");
  const { value, setValue } = useValue();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios(`student?search=${search.current.value}`);
      setData(res.data);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);
  return (
    <>
      <InputGroup w="60vw">
        <Input
          name="NIS"
          isRequired
          isReadOnly
          value={value}
          onClick={onOpen}
          type="text"
        />
        <InputRightElement
          children={
            value ? <MdOutlineClose onClick={() => setValue("")} /> : null
          }
        />
      </InputGroup>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nama</ModalHeader>
          <Divider />
          <ModalBody>
            <Input
              type="search"
              ref={search}
              defaultValue=""
              placeholder="search"
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
                {data.map((item) => {
                  return <Radio value={item.NIS}>{item.Nama}</Radio>;
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

export default SearchNama;
