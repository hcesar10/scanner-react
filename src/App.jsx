import { useState } from "react";
import Html5QrcodePlugin from "./Html5QrcodePlugin";

const App = () => {

  const [status, setStatus] = useState('');

  const onNewScanResult = (decodedText, decodedResult) => {
    setStatus(`Scan result: ${decodedText}`);
    console.log(`Scan result: ${decodedText}`);
    console.log(decodedResult);
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      {status}
    </div>
  );
};

export default App;