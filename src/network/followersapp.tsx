import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../navbar/navbar"
import { ToastContainer, toast } from 'react-toastify';
import None from "./components/nonecomponent"
import FollowerComponent from "./components/followercomponent"
import BaseUrl from "../BaseUrl";


const Manage = () => {
  
  const [searchres,setsearchres] = useState([]);
  const [none,setnone] = useState(true)

  useEffect(()=>{BaseUrl.get("/network/followers/",config)
    .then((res)=>{
        console.log(res);
        setsearchres(res.data);
        if(res.data.length!==0)
        setnone(false);
        else
        setnone(true);
    })
    .catch((err)=>{
        console.log(err)
    })
})

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
      <div id="accountNav">
      <p onClick={()=>{Navhandler("/network/recieved"); } }  >Invitations Recieved</p>
        <p onClick={()=>{Navhandler("/network/sent"); } }  >Invitations sent</p>
        <p  onClick={()=>{Navhandler("/network/connection"); } } >Connections</p>
        <p  style={activestyle} onClick={()=>{Navhandler("/network/followers"); } }>Followers</p>
        <p onClick={()=>{Navhandler("/network/following"); } }>Following</p>
      </div>
      <div  style={{height:"auto"}} id="skill">
        <p>Followers</p>
        {none ? <None showtext="No Followers" />: 
        <div style={{marginTop:"2vh"}}>
          {searchres.map((data)=>{return <FollowerComponent data={data}/>})}
        </div> }
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default Manage;
