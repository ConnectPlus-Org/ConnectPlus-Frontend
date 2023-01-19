import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../navbar/navbar"
// import Skillcomponent from "./searchbox";
// import "./skill.css"
import { ToastContainer, toast } from 'react-toastify';

const Manage = () => {
  const Navhandler= useNavigate();
  const activestyle={
    color:'#A950FB' ,
    borderLeft:'3px solid #A950FB',
   
}
var accesstoken=localStorage.getItem("accesstoken");

const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}


  return (
    <div>
      <Nav />
      <div id="account_nav">
        <p onClick={()=>{Navhandler("/network/manage"); } }   >Manage</p>
        <p style={activestyle} onClick={()=>{Navhandler("/network/connection"); } } >Connection</p>
        <p   onClick={()=>{Navhandler("/network/followers"); } }>Followers</p>
        <p onClick={()=>{Navhandler("/network/following"); } }>Following</p>
      </div>
      <div id="skill">
        <p>Connections</p>
       
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default Manage;
