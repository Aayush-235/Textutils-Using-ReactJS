import './App.css';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
// import About from './components/About.js';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,  // Switch is deprecated, use Routes instead
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showtAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showtAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      // setTimeout(() => {
      //   document.title = "TextUtils install now";
      // }, 2000);
      // setTimeout(() => {
      //   document.title = "TextUtils have found some viruses";
      // }, 1500);

    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showtAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";


    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* /user ---> components 1
          /user/aboutus ---> components 2 */}
            {/* <Route exact path="/about" element={<About showtAlert={showtAlert} />} /> */}
            {/* <Route exact path="/" element={} /> */}
            <TextForm showtAlert={showtAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Routes> */}

        </div>
      {/* </Router> */}
    </>

  );
}

export default App;