//import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import { Router, Routes } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [theme, settheme] = useState('dark')
  const [alert, setAlert] = useState(null)
  const [btn, setbtn] = useState('primary')
  //const [img, setimg] = useState('logo192.png')
  const showMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode("dark")
      settheme("light")
      document.body.style.backgroundColor = 'black'
      showMsg("dark mode is enabled", "success")
      setbtn('danger')
      //setimg('stats.png')

    }
    else {
      setmode("light")
      settheme("dark")
      document.body.style.backgroundColor = 'white'
      showMsg("light mode is enabled", "success")
      setbtn('primary')
      //setimg('logo192.png')
    }
  }
  const toggleBlueMode = () => {
    if (mode === 'light') {
      setmode("dark")
      settheme("light")
      document.body.style.backgroundColor = 'blue'
      showMsg("dark mode is enabled", "success")
      setbtn('success')

    }
    else {
      setmode("light")
      settheme("dark")
      document.body.style.backgroundColor = 'white'
      showMsg("light mode is enabled", "success")
      setbtn('primary')
    }
  }


  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} theme={theme} toggleBlueMode={toggleBlueMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm btn={btn} showMsg={showMsg} heading="hello" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
