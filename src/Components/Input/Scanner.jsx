import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useState } from "react";
import QrReader from "react-weblineindia-qrcode-scanner";
import useValue from "../../hooks/useValue";
import { MdOutlineQrCodeScanner } from "react-icons/md";

const Scanner = () => {
  const [ setResult] = useState("No result");
  const { setValue } = useValue();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScan = (data) => {
    setResult(data);
    if (data !== null) {
      setValue(data);
      onclose()
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <>
      <Icon as={MdOutlineQrCodeScanner} onClick={onOpen}/>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <QrReader onError={handleError} onScan={handleScan} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Scanner;
