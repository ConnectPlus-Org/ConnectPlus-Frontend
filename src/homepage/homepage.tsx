import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../navbar/navbar";
import './homepage.css'
import PostBox from "./createpost"
import { Navigate, useNavigate } from "react-router-dom";
import Post from "./post";
import BaseUrl from "../BaseUrl";
const photo: string = require("./images/photo.svg").default;
const video: string = require("./images/video.svg").default;
const line: string = require("./images/line.svg").default;
const right: string = require("./images/rightarrow.svg").default;
const item: string = require("./images/item.svg").default;
const link: string = "https://linkedin-backend.azurewebsites.net/";

const Home = () => {
  const Navhandler = useNavigate();
  var accesstoken = localStorage.getItem("accesstoken");
  const user = sessionStorage.getItem("username") || "";
  const [coverImgae, setCover] = useState("");
  const [postClick,setPostClick] = useState(false);
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };

  const [posts, setPost] = useState([]);

  useEffect(()=>{BaseUrl.get("/profile/mainpage/?username=" + user, config)
    .then((res) => {
      console.log(res);
      setCover(res.data.background_image);
    })
    .catch((err) => {
      if (err.response.status == 404) Navhandler("/profile");
      if (err.response.status == 401) Navhandler("/login");
      console.log(err);
    });},[])
    useEffect(()=>{BaseUrl.get("/post/feed/?page=2", config)
    .then((res) => {
      console.log(res);
      setPost(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });},[])
  const avatar = sessionStorage.getItem("avatar") || "";
  const name = sessionStorage.getItem("name") || "";
  const headline = sessionStorage.getItem("headLine") || "";
  const username = sessionStorage.getItem('username') || ""
  return (
    <div>
        { postClick ? <PostBox setPostClick={()=>setPostClick(!postClick)} />: <div></div>}
      <Nav />
      <div onClick={()=>setPostClick(!postClick) } id="search_post">
        <input 
            placeholder="Start Post" readOnly/>
        <img src={photo} /> Photo <img src={line} />
        <img src={video} /> Video <img src={line} />
        <div >Create Post</div>
      </div>
      <div id="shortprofile">
        <img id="shortcover" src={coverImgae} alt="" />
        <img id="shortava" src={avatar} alt="avatar" />
        <p style={{cursor:"pointer"}} onClick={()=>{Navhandler(`/account/?username=${username}`);sessionStorage.setItem('viewusername',username)}}>
          {name} <img src={right} />
        </p>
        {headline}
        <br />
        <img style={{ marginRight: "1vw" }} src={item} />
        <p style={{ display: "inline-block" }}>My Items</p>
      </div>
      <div
        style={{
          width: "45vw",
          position: "absolute",
          marginLeft: "20vw",
          marginTop: "11.4vw",
        }}
      >
        {posts.map((box: any,index) => {
          return <Post seq={index} box={box} key={box.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
