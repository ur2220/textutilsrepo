import "./App.css";
import Navbar from "./components/Navbars";
import About from "./components/about";
import Forum from "./components/Form";
import React, { useState } from "react";
import Home from "./components/Home";
import Alert from "./components/Alert"
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode is enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled ", "success");
    }
  };

  return (
    <>
      <Main>
        <Navbar title="NewtextUtils" Mode={Mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path = "/"  element = {<div className="container"><Forum showAlert={showAlert} heading="This is Text Area" Mode={Mode} />
              </div>}/>
          <Route exact path="/Alert" element={ <strong> <Alert Alert={alert} /> </strong>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path ="/Home" element={<Home/>}/>
        </Routes>
      </Main>
    </>
  );
}

export default App;
