import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import React, { Component } from "react";
import QrReader from "react-weblineindia-qrcode-scanner";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    if (data !== null) {
      localStorage.setItem("value", data);
    }
  }

  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    const value = localStorage.getItem("value");

    return (
      <div>
        {value ? (
            <Box>
             <Text>{value}</Text>
             <Button onClick={() => localStorage.removeItem('value')}>Scan Ulang ?</Button>
            </Box>
        ) : (
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
          />
        )}
      </div>
    );
  }
}

export default Test;
