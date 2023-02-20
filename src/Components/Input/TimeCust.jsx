import React, { useState } from "react";
import { Checkbox, Flex } from "@chakra-ui/react";
import { useEffect } from "react";

const TimeCust = ({ setTime }) => {
  const [checkboxValues, setCheckboxValues] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  const handleCheckboxChange = async (checkboxName) => {
    setCheckboxValues({
      ...checkboxValues,
      [checkboxName]: !checkboxValues[checkboxName],
    });
  };

  const filteredObject = Object.fromEntries(
    Object.entries(checkboxValues).filter(([key, value]) => value === true)
  );
  useEffect(() => {
    setTime(Object.keys(filteredObject));
  }, [checkboxValues]);

  const checkboxLabels = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Flex gap="1.5" w="60vw" wrap="wrap">
      {checkboxLabels.map((label, index) => (
        <Checkbox
          key={index}
          isChecked={checkboxValues[`${index + 1}`]}
          onChange={() => handleCheckboxChange(`${index + 1}`)}
        >
          {label}
        </Checkbox>
      ))}
    </Flex>
  );
};

export default TimeCust;
