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
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Divider, Stack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";

const SearchPenyakit = ({ onAdd, penyakit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = [{ id: 1, nama: "Panas" }, { id: 2, nama: "Batuk" }, { id: 3, nama: "Pilek" }, { id: 4, nama: "Sakit Panas" }, { id: 5, nama: "Kseleo" }];

  const handleClick = (item) => {
    onAdd(item);
    onClose();
  };
  
  // const [data, setData] = useState([]);

  //   const getData = async () => {
  //     try {
  //       const res = await axios(`student?search=${search.current.value}`);
  //       setData(res.data);
  //     } catch (err) {
  //       // console.log(err);
  //     }
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, [data]);

  return (
    <>
      <InputGroup w="60vw">
        <Input
          name="penyakit"
          isRequired
          isReadOnly={penyakit}
          defaultValue={penyakit}
          onClick={onOpen}
          type="text"
        />
        <InputRightElement
          children={
            penyakit ? <MdOutlineClose onClick={() => handleClick("")} /> : null
          }
        />
      </InputGroup>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nama Penyakit</ModalHeader>
          <Divider />
          <ModalBody>
            <Input
              type="search"
              defaultValue=""
              placeholder="search"
            />
            <RadioGroup defaultValue="">
              <Stack
                mt="4"
                h="50vh"
                onChange={(e) => {
                  handleClick(e.target.value);
                  onClose();
                }}
                spacing="4"
              >
                {data.map((item) => {
                  return <Radio value={item.nama}>{item.nama}</Radio>;
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

export default SearchPenyakit;
