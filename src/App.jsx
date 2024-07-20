import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AxiosPage from "./components/AxiosPage";
import Dashboard from "./components/Dashboard";
// import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/axios" element={<AxiosPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/create" element={<CreateUser />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
