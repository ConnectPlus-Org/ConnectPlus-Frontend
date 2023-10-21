import React, { useState } from "react";
import './navbar.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const logo: string = require("../Authentication/images/Profoliologo.svg").default;
const home: string = require("./icons/home.svg").default;
const msg: string = require("./icons/msg.svg").default;
const noti: string = require("./icons/noti.svg").default;
const network: string = require("./icons/network.svg").default;
const search: string = require("./icons/search.svg").default;
const job: string = require("./icons/job.svg").default;
const work: string = require("./icons/work.svg").default;
const signOut: string = require("./icons/signOut.svg").default;

const Nav = () => {
    var accesstoken=localStorage.getItem("accesstoken");
    const username = localStorage.getItem("username") || ""
    const viewusername = localStorage.getItem("viewusername") || ""
    const avatar = localStorage.getItem("avatar") || ""
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
    }
    function refresh (){
        if (username!=viewusername)
        window.location.reload()
    }

    const Navhandler = useNavigate();
    return <div id="navbar">
        <div id="navLogo" className="navItem"><img id="navLogoimg" className="navImg" src={logo} alt="logo" />ConnectPlus</div>
        <div onClick={()=>{ Navhandler("/")}} className="navItem"><img className="navImg" src={home} alt="home" />Homepage</div>
        <div onClick={()=>{ Navhandler("/network/recieved")}} className="navItem"><img className="navImg" src={network} alt="network" />Networks</div>
        <div className="navItem"onClick={()=>{;Navhandler("/search")}}><img className="navImg" src={search} alt="search" />Search</div>
        <div className="navItem" onClick={()=>{localStorage.setItem('viewusername',username);Navhandler("/account")}} ><img id="accountimg" className="navImg" src={avatar} alt="ava" />My Account</div>
        <div className="navItem" onClick={()=>{localStorage.clear();localStorage.clear();Navhandler('/login')}}><img className="navImg" src={signOut} alt="job" />Sign out</div>
    </div>
}

export default Nav;
