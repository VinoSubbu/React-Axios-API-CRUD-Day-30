import React from "react";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AxiosPage from "./components/AxiosPage";
import Dashboard from "./components/Dashboard";
// import CreateUser from "./components/CreateUser";
import Home from "./components/Home";

function App() {

  
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/axios" element={<AxiosPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/create" element={<CreateUser />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
