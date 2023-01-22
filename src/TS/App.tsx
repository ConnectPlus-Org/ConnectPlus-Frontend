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
import Profile  from "../Authentication/profile creation/profileApp"
import Editprofile from "../MyAccount/edit_profile/edit_profile";
import ProfileHead from "../Authentication/profile creation/profileHead";
import Skill from "../MyAccount/skill/skillApp";
import AboutMe from "../MyAccount/AboutMe/aboutMeApp";
import Experience from "../MyAccount/edit_profile/experience"
import Education from "../MyAccount/Education/Education"
import Additional from "../MyAccount/Additional/Additional"
import Courses from "../MyAccount/Additional/courses"
import Score from "../MyAccount/Additional/score"
import Account from "../MyAccount/Main/MainApp";
import Manage from "../network/recievedapp"
import Sent from "../network/sentapp"
import Connection from "../network/connectionapp"
import Followers from "../network/followersapp"
import Following from "../network/followingapp"
import Skill_View from "../MyAccount/Main/viewpage/skill_view";
import Experience_View from "../MyAccount/Main/viewpage/experience_view";
import Education_View from "../MyAccount/Main/viewpage/educationview";
import Test_View from "../MyAccount/Main/viewpage/test";
import Course_View from "../MyAccount/Main/viewpage/courseview";
import Home from "../homepage/homepage";
import MobNav from "../MyAccount/Main/mobileNav";

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
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
    <Route path="/profilehead" element={<ProtectedRoute><ProfileHead /></ProtectedRoute>}></Route>
    <Route path="/account" element={ <ProtectedRoute><Account /></ProtectedRoute>}></Route>
    <Route path="/mobnav" element={ <ProtectedRoute><MobNav /></ProtectedRoute>}></Route>
    <Route path="/account/edit_profile" element={ <ProtectedRoute><Editprofile /></ProtectedRoute>}></Route>
    <Route path="/account/experience" element={ <ProtectedRoute><Experience /></ProtectedRoute>}></Route>
    <Route path="/account/skills" element={<ProtectedRoute><Skill /></ProtectedRoute>}></Route>
    <Route path="/account/viewskills" element={<ProtectedRoute><Skill_View /></ProtectedRoute>}></Route>
    <Route path="/account/viewexperience" element={<ProtectedRoute><Experience_View /></ProtectedRoute>}></Route>
    <Route path="/account/aboutme" element={<ProtectedRoute><AboutMe /></ProtectedRoute>}></Route>
    <Route path="/account/education" element={<ProtectedRoute><Education/></ProtectedRoute>}></Route>
    <Route path="/account/vieweducation" element={<ProtectedRoute><Education_View/></ProtectedRoute>}></Route>
    <Route path="/account/additional" element={<ProtectedRoute><Additional/></ProtectedRoute>}></Route>
    <Route path="/account/viewtestscore" element={<ProtectedRoute><Test_View/></ProtectedRoute>}></Route>
    <Route path="/account/viewcourse" element={<ProtectedRoute><Course_View/></ProtectedRoute>}></Route>
    <Route path="/account/additional/courses" element={<ProtectedRoute><Courses/></ProtectedRoute>}></Route>
    <Route path="/account/additional/score" element={<ProtectedRoute><Score/></ProtectedRoute>}></Route>
    <Route path="/network/recieved" element={<ProtectedRoute><Manage/></ProtectedRoute>}></Route>
    <Route path="/network/sent" element={<ProtectedRoute><Sent/></ProtectedRoute>}></Route>
    <Route path="/network/connection" element={<ProtectedRoute><Connection/></ProtectedRoute>}></Route>
    <Route path="/network/followers" element={<ProtectedRoute><Followers/></ProtectedRoute>}></Route>
    <Route path="/network/following" element={<ProtectedRoute><Following/></ProtectedRoute>}></Route>
    <Route path="" element={<Home/>}></Route>
  </Routes>
</BrowserRouter>;;
};



export default App;
