import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Authentication/login/LoginApp";
import SignUp from "../Authentication/Signup/SignUpApp";
import Phone from "../Authentication/Signup/PhoneNo";

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />} ></Route>
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/authphone" element={<Phone />}></Route>
  </Routes>
</BrowserRouter>;;
};



export default App;
