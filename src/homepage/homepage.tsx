import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../navbar/navbar";
import './homepage.css'
import PostBox from "./createpost"
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../loader"

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
  const user = localStorage.getItem("username") || "";
  const [coverImgae, setCover] = useState("");
  const [postClick,setPostClick] = useState(false);
  const [hasmore,setHasMore] = useState(false)
  const [loading,setLoading] = useState(false)  
  const [scrollloading,setscrollloading] = useState(false)  
  
  var accesstoken = localStorage.getItem("accesstoken");

  if(!accesstoken) Navhandler("/login");

  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };

  const [posts, setPost] = useState([]);
  const [page,setPage] = useState(1);

  useEffect(() => {
    console.log(user)
    if (user) {
      BaseUrl.get("/profile/mainpage/?username=" + user, config)
      .then((res) => {
        console.log(res);
        setCover(res.data.background_image);
      })
      .catch((err) => {
        if (err.response.status == 404) Navhandler("/profile");
        if (err.response.status == 401) Navhandler("/login");
        console.log(err);
      });
    }
  }, [])
    useEffect(()=>{
        if(page===1)
        setLoading(true);
        BaseUrl.get(`/post/feed/?page=${page}`, config)
    .then((res) => {
      console.log(res);
      setLoading(false);
      setscrollloading(false);
      if(res.data.next!=null)
      setHasMore(true);
      else
      setHasMore(false);
      let items:any =[...posts, ...res.data.results];
      setPost(items);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      setscrollloading(false);
    });},[page])


    function scroller(){
        setPage(page+1);
        setscrollloading(true);
    }

  const avatar = localStorage.getItem("avatar") || "";
  const name = localStorage.getItem("name") || "";
  const headline = localStorage.getItem("headLine") || "";
  return (
    <div>
        { postClick ? <PostBox setPostClick={setPostClick} postClick={postClick} />: <div></div>}
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
        <p style={{cursor:"pointer"}} onClick={()=>Navhandler('/account')}>
          {name} <img src={right} />
        </p>
        {headline}
        <br />
        <img onClick={()=>Navhandler('/savedposts')} style={{ marginRight: "1vw",cursor:"pointer" }} src={item} />
        <p onClick={()=>Navhandler('/savedposts')} style={{ display: "inline-block", cursor:"pointer" }}>My Items</p>
      </div>
      <div id="settle">
        { !loading? posts.map((box: any,index:number) => {
          return <Post seq={index} box={box} key={box.id} />;
        }) : <Loader />}
        {hasmore && (scrollloading? <Loader />:<div  onClick={scroller} style={{textAlign:"center",backgroundColor:"#a950fb",border:"2px solid white"}}>See More.</div>)}
      </div>
      
    </div>
  );
};

export default Home;
