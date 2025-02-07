import logo from './logo.svg';
import './App.css';
import Html5QrcodePlugin from './Html5QrcodePlugin';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(`Scan result: ${decodedText}`, decodedResult);
    setData(decodedText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
        {data}
      </header>
    </div>
  );
}

export default App;
