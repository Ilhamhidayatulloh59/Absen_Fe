import { useEffect, useRef, useState } from "react";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Lorem, Flex, Circle, Icon, Text } from "@chakra-ui/react";
import { IoAddOutline } from "react-icons/io5";
import Scanner from "./Scanner";

const ModalForm = ({label}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
              <Scanner/>
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