import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
