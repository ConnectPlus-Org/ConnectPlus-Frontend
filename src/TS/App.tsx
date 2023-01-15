import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from '../util/protectedroute';
import Login from "../Authentication/login/LoginApp";
import SignUp from "../Authentication/Signup/SignUpApp";
import Phone from "../Authentication/Signup/signup";
import Otp from "../Authentication/otp/emailotpapp";
import Phoneotp from "../Authentication/otp/phoneotpapp";
import Forgot from "../Authentication/forgot/forgotAPP";
import Resetpass from "../Authentication/reset password/resetPassApp"
import Setpass from "../Authentication/set password/setPassApp"
import Success from "../Authentication/login/success";
import Profile  from "../Authentication/profile creation/profileApp"
import Editprofile from "../MyAccount/edit_profile/edit_profile";
import ProfileHead from "../Authentication/profile creation/profileHead";
import Skill from "../MyAccount/skill/skillApp";
import AboutMe from "../MyAccount/AboutMe/aboutMeApp";


const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />} ></Route>
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/authphone" element={<Phone />}></Route>
    <Route path="/otp" element={<Otp />}></Route>
    <Route path="/phoneotp" element={<Phoneotp />}></Route>
    <Route path="/forgot_password" element={<Forgot />}></Route>
    <Route path="/reset_password" element={<Resetpass />}></Route>
    <Route path="/set_password" element={<Setpass />}></Route>
    <Route path="/success" element={ <Success />}></Route>
    <Route path="/account/edit_profile" element={ <ProtectedRoute><Editprofile /></ProtectedRoute>}></Route>
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
    <Route path="/profilehead" element={<ProtectedRoute><ProfileHead /></ProtectedRoute>}></Route>
    <Route path="/account/skill" element={<ProtectedRoute><Skill /></ProtectedRoute>}></Route>
    <Route path="/account/aboutme" element={<ProtectedRoute><AboutMe /></ProtectedRoute>}></Route>
  </Routes>
</BrowserRouter>;;
};



export default App;
