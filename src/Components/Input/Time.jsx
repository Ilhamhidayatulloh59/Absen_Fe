import React, { useRef } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { BiEdit } from "react-icons/bi";

const TimeDefault = ({ date, cust, jenis }) => {
  const time = useRef();

  function setDefaultValue() {
    const dayOfWeek = new Date(date).getDay();

    switch (dayOfWeek) {
      case 0:
        if (time.current) {
          time.current.defaultValue = jenis === "Piket Malam" ? 3 : 5;
        }
        break;
      case 1:
        if (time.current) {
          time.current.defaultValue = jenis === "Piket Malam" ? 3 : 7;
        }
        break;
      case 2:
        if (time.current) {
          time.current.defaultValue = jenis === "Piket Malam" ? 3 : 7;
        }
        break;
      case 3:
        if (time.current) {
          time.current.defaultValue = jenis === "Piket Malam" ? 3 : 7;
        }
        break;
      case 4:
        if (time.current) {
          time.current.defaultValue = jenis === "Piket Malam" ? 3 : 5;
        }
        break;
      case 5:
        if (time.current) {
          time.current.defaultValue = 0;
        }
        break;
      case 6:
        if (time.current) {
          time.current.defaultValue = jenis === "Piket Malam" ? 3 : 7;
        }
        break;
      default:
        if (time.current) {
          time.current.defaultValue = 0;
        }
        break;
    }
  }

  setDefaultValue();

  return (
    <>
        <InputGroup w="60vw">
        <Input type="number" w="60vw" name="time" isReadOnly ref={time} />
        <InputRightElement
          children={
            <BiEdit onClick={() => cust(true)}/>
          }
        />
      </InputGroup>
    </>
  );
};

export default TimeDefault;
