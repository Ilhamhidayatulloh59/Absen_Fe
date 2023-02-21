import { Input } from "@chakra-ui/input";
import React, { useRef } from "react";

const DayDefault = ({ date }) => {
  const day = useRef();

  function setDefaultValue() {
    const dayOfWeek = new Date(date).getDay();

    switch (dayOfWeek) {
      case 0:
        if (day.current) {
          day.current.defaultValue = "Ahad";
        }
        break;
      case 1:
        if (day.current) {
          day.current.defaultValue = "Senin";
        }
        break;
      case 2:
        if (day.current) {
          day.current.defaultValue = "Selasa";
        }
        break;
      case 3:
        if (day.current) {
          day.current.defaultValue = "Rabu";
        }
        break;
      case 4:
        if (day.current) {
          day.current.defaultValue = "Kamis";
        }
        break;
      case 5:
        if (day.current) {
          day.current.defaultValue = "Jum'at";
        }
        break;
      case 6:
        if (day.current) {
          day.current.defaultValue = "Sabtu";
        }
        break;
      default:
        if (day.current) {
          day.current.defaultValue = "";
        }
        break;
    }
  }

  setDefaultValue();

  return (
    <>
        <Input name="day" type="text" w="60vw" isReadOnly ref={day} />
    </>
  );
};

export default DayDefault;
