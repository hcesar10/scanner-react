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
    <div style={{ textAlign: 'center', height: '100px', width: '100px', minHeight: '100px', minWidth: '100px', backgroundColor: 'red' }}>
      <input type="text" />
      {/* <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      {status} */}
    </div>
  );
};

export default App;