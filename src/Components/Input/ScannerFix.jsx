import React from 'react';
const { Html5QrcodePlugin } = require("./Scanner");


class InputQr extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback.
        this.onNewScanResult = this.onNewScanResult.bind(this);
    }

    render() {
        return (<div>
            <h1>Html5Qrcode React example!</h1>
            <Html5QrcodePlugin 
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={this.onNewScanResult}/>
        </div>);
    }

    onNewScanResult(decodedText, decodedResult) {
        // Handle the result here.
    }
}

export default InputQr