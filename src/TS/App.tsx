import React from "react";
import Login from "../components/LoginApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/LogIn" element={<Login />} ></Route>
    <Route></Route>
  </Routes>
</BrowserRouter>;;
};



export default App;
