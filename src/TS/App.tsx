import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Authentication/login/LoginApp";
import SignUp from "../Authentication/Signup/SignUpApp";
import Phone from "../Authentication/Signup/signup";
import OTP from "../Authentication/otp/otpapp"
import Forgot from "../Authentication/forgot/forgotAPP";

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />} ></Route>
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/authphone" element={<Phone />}></Route>
    <Route path="/otp" element={<OTP />}></Route>
    <Route path="/forgot_password" element={<Forgot />}></Route>
  </Routes>
</BrowserRouter>;;
};



export default App;
