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
    <main>
      <body>
        <div style={{ textAlign: 'center', height: '100px', width: '100px', backgroundColor: 'red' }}>
          <input type="text" />
          {/* <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      {status} */}
        </div>
      </body>
    </main>
  );
};

export default App;