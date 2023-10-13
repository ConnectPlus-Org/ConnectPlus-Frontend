import React, { useEffect, useState } from "react";
import BaseUrl from "../BaseUrl";
import Loader from "../loader";
import Nav from "../navbar/navbar";
import PostBox from "./createpost"
import Post from "./post";
const photo: string = require("./images/photo.svg").default;
const video: string = require("./images/video.svg").default;
const line: string = require("./images/line.svg").default;
const Saved = () => {
    const [saved,setSaved] = useState([])
    const [loading,setLoading] = useState(false)  
    const [postClick,setPostClick] = useState(false);
    var accesstoken = localStorage.getItem("accesstoken");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };

  useEffect(()=>{setLoading(true);
    BaseUrl.get("/post/bookmark/",config)
    .then((res)=>{
        setSaved(res.data)
        console.log(res)
        setLoading(false)
    })},[])
    
    return <div>
        { postClick ? <PostBox setPostClick={()=>setPostClick(!postClick)} />: <div></div>}
        <Nav />
        <div onClick={()=>setPostClick(!postClick) } id="search_post">
        <input 
            placeholder="Start Post" readOnly/>
        <img src={photo} /> Photo <img src={line} />
        <img src={video} /> Video <img src={line} />
        <div >Create Post</div>
      </div>
        <div
        style={{
          width: "45vw",
          position: "absolute",
          marginLeft: "20vw",
          marginTop: "11.4vw",
        }}
      >
        { !loading? saved.map((box: any,index) => {
          return <Post seq={index} box={box} key={box.id} />;
        }) : <Loader />}
      </div>
    </div>
}

export default Saved;