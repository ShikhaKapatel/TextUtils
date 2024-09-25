import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alerts from "./Components/Alerts";
import TextForm from "./Components/TextForm";

import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState("light"); //wether dark mode is enabled or not

  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode= () =>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor='#102840';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="AboutTextUtils"/>
      <Alerts alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the text to Analyze" />} />
      </Routes>
      
      {/* <About/> */}
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
