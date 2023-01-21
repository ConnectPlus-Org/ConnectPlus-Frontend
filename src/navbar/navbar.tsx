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
const avatar = sessionStorage.getItem("avatar") || ""

const Nav = () => {
    var [coverimage,updatecover] = useState("")
    var accesstoken=localStorage.getItem("accesstoken");
    const username = sessionStorage.getItem("username") || ""
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
    }

    const Navhandler = useNavigate();
    return <div id="navbar">
        <div id="navlogo" className="navitem"><img id="navlogoimg" className="navimg" src={logo} alt="logo" />ConnectPlus</div>
        <div className="navitem"><img className="navimg" src={home} alt="home" />Homepage</div>
        <div onClick={()=>{ Navhandler("/network/recieved")}} className="navitem"><img className="navimg" src={network} alt="network" />Networks</div>
        <div className="navitem"><img className="navimg" src={msg} alt="msg" />Messaging</div>
        <div className="navitem"><img className="navimg" src={search} alt="search" />Search</div>
        <div className="navitem"><img className="navimg" src={noti} alt="noti" />Notification</div>
        <div className="navitem" onClick={()=>{Navhandler("/account");sessionStorage.setItem('viewusername',username)}} ><img id="accountimg" className="navimg" src={avatar} alt="ava" />My Account</div>
        <div className="navitem"><img className="navimg" src={job} alt="job" />Jobs</div>
    </div>
}

export default Nav;