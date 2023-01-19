import axios from "axios";
import React, { useState } from "react";
import Nav from "../../navbar/navbar";
import "./main.css"
var cover: string = require("./images/coverimage.svg").default;

const Account = () => {
    const avatar = sessionStorage.getItem("avatar") || ""
    const username = sessionStorage.getItem("username") || ""
    var accesstoken=localStorage.getItem("accesstoken");
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
    }

    var [coverimage,updatecover] = useState(cover)
    axios.get("https://linkedin-backend.azurewebsites.net/profile/mainpage/?username="+username,config)
    .then((res)=>{
        updatecover(res.data.background_image)
        console.log(res);
    })
    return <div>
        <Nav />
        <div id="account_details">
            <img id="cover_image" src={coverimage} />
            <img id="account_avatar" alt="avatar" src={avatar}/>
            {/* <div>
                <span>Vijay Verma</span><span>167 followers</span><span>151 connections</span>
                <p>Talks about Web 3, Design & everything in between | Design at WALL | Designing Web 3.0 | Figma Community Advocate | 3D Tin Rooms</p>
            </div> */}

        </div>
    </div>
}

export default Account;