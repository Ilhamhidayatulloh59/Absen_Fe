import { useEffect, useRef, useState } from "react";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Lorem, Flex, Circle, Icon, Text } from "@chakra-ui/react";
import { IoAddOutline } from "react-icons/io5";
import Html5QrcodePlugin from "./Scanner";
import ResultContainerPlugin from "./Result";

const ModalForm = ({label}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        setDecodedResults(prev => [...prev, decodedResult]);
    };

    return (
      <>
        <Flex onClick={onOpen} align='center' m="3" p='2'>
            <Circle bgColor="orange">
            <Icon p="2" color="white" w={10} h={10} as={IoAddOutline} />
            </Circle>
            <Text ml='4' fontWeight="bold" fontSize="sm">
            {label}
            </Text>
        </Flex>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{`Input ${label}`}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>dvskmfgkmsobmsf</Text>
              <Html5QrcodePlugin
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
                <ResultContainerPlugin results={decodedResults} />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalForm