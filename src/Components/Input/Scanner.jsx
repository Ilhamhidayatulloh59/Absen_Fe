import { Box, Heading, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import QrReader from "react-weblineindia-qrcode-scanner";
import useValue from "../../hooks/useValue";

const Scanner = () => {
  const [result, setResult] = useState("No result");
  const { value, setValue } = useValue();

  const handleScan = (data) => {
    setResult(data);
    if (data !== null) {
      setValue(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  
  const previewStyle = {
    height: 240,
  }

  return (
    <div>
      {value ? (
        <Box>
          <Heading>{value}</Heading>
          <Text onClick={() => setValue('')}>Clear !</Text>
        </Box>
      ) : (
        <Box>
          <QrReader style={previewStyle} onError={handleError} onScan={handleScan} />
        </Box>
      )}
    </div>
  );
};

export default Scanner;
