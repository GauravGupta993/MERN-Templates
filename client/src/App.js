// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from react-router-dom
import Frontend from "./components/frontendTemplate";
import Backend from "./components/backendTemplate";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { frontenddata, backenddata } from "./data";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/frontend" element={<Frontend />} />
                {
                    frontenddata.map(data => {
                        return (
                            <Route exact path={`/frontend/${data.urlTerm}`} element={data.element} />
                        )
                    })
                }
                <Route exact path="/backend" element={<Backend />} />
                {
                    backenddata.map(data => {
                        return (
                            <Route exact path={`/backend/${data.urlTerm}`} element={data.element} />
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
