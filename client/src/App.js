// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from react-router-dom
import Frontend from "./components/designTemplate";
import Backend from "./components/apicallTemplate";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { designdata, apicalldata } from "./data";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/design" element={<Frontend />} />
                {
                    designdata.map(data => {
                        return (
                            <Route exact path={`/design/${data.urlTerm}`} element={data.element} />
                        )
                    })
                }
                <Route exact path="/apicall" element={<Backend />} />
                {
                    apicalldata.map(data => {
                        return (
                            <Route exact path={`/apicall/${data.urlTerm}`} element={data.element} />
                        )
                    })
                }
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
