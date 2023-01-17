import React from "react";
import Nav from "../../navbar/navbar";
import "./main.css"
const coverimage: string = require("./images/coverimage.svg").default;

const Account = () => {
    return <div>
        <Nav />
        <div id="account_details">
            <img id="cover_image" src={coverimage} />
            <img id="account_avatar" alt="avatar"/>
            {/* <div>
                <span>Vijay Verma</span><span>167 followers</span><span>151 connections</span>
                <p>Talks about Web 3, Design & everything in between | Design at WALL | Designing Web 3.0 | Figma Community Advocate | 3D Tin Rooms</p>
            </div> */}

        </div>
    </div>
}

export default Account;