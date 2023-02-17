import React, { useState } from 'react';
import QrReader from 'react-weblineindia-qrcode-scanner'

function Test() {
  const [result, setResult] = useState('No result');

  const handleScan = (data) => {
    setResult(data);
  }

  const handleError = (err) => {
    console.error(err);
  }

  return (
    <div>
      <QrReader
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </div>
  );
}

export default Test