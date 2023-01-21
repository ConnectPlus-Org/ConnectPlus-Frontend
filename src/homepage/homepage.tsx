import axios from "axios";
import React from "react";
import Nav from "../navbar/navbar";
import './homepage.css'
import { Navigate, useNavigate } from "react-router-dom";
const photo:string = require('./images/photo.svg').default
const video:string = require('./images/video.svg').default
const line:string = require('./images/line.svg').default
const right:string = require('./images/rightarrow.svg').default
const item:string = require('./images/item.svg').default

const Home = () => {
    const Navhandler = useNavigate();
    var accesstoken = localStorage.getItem("accesstoken");
    const config ={
    headers:{
        Authorization:`Bearer ${accesstoken}`,
    }
}
    axios.get("https://linkedin-backend.azurewebsites.net/profile/userprofile/",config)
    .then((res) => {
        console.log(res)
        sessionStorage.setItem("avatar",res.data.avatar) 
        sessionStorage.setItem("username",res.data.username) 
        sessionStorage.setItem("headline",res.data.headline) 
        sessionStorage.setItem("name",res.data.first_name + " " + res.data.last_name) 
    })
    .catch((err) => {
        if(err.response.status == 404)
        Navhandler('/profile');
        else if(err.response.status == 401)
        Navhandler('/login');
        console.log(err);
    });

    const avatar= sessionStorage.getItem('avatar') || ""
    const name = sessionStorage.getItem('name') || ""
    const headline = sessionStorage.getItem('headline') || ''
    return <div>
        <Nav />
        <div id="search_post">
            <input placeholder="Search Post" />
            <img src={photo} /> Photo <img src={line} />
            <img src={video} /> Video <img src={line} />
            <div>Create Post</div>
        </div>
        <div id="shortprofile">
            <img id='shortcover' src={avatar} alt="" />
            <img id="shortava" src={avatar} alt="avatar" />
            <p>{name} <img src={right} /></p>
            {headline}
            <br/>
            <img style={{marginRight:'1vw'}} src={item} /><p style={{display:"inline-block"}}>My Items</p>
        </div>
    </div>
}

export default Home;
