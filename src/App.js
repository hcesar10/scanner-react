import logo from './logo.svg';
import './App.css';
import Html5QrcodePlugin from './Html5QrcodePlugin';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [data, setData] = useState('');

  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(`Scan result: ${decodedText}`, decodedResult);
    setData(decodedText);
    if (decodedText.endsWith("7")) {
      notifySuccess(decodedText);
    } else notifyError(decodedText)
  };

  const notifySuccess = (text) => toast.success(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  });

  const notifyError = (text) => toast.error(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  });


  return (
    <div className="App">
      <div>
        <input
          type="textarea"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setData(e.target.value);
              if (e.target.value.endsWith("7")) {
                notifySuccess(e.target.value);
              } else notifyError(e.target.value)
              e.target.value = '';
            }
          }}
        />
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
        {data}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
