import axios from "axios";
import { toNamespacedPath } from "node:path/win32";
import { config } from "process";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../../navbar/navbar";
import { ToastContainer, toast } from 'react-toastify';
import './view.css'
const left:string = require('./images/leftarrow.svg').default
const add:string = require('./images/add.svg').default
const del:string = require('./images/delete.svg').default

const Skill_View = () => {
  const Navhandler= useNavigate();
  const activestyle={
    color:'#A950FB' ,
    borderLeft:'3px solid #A950FB',
   
}
const username = sessionStorage.getItem("username") || ""
var accesstoken=localStorage.getItem("accesstoken");
var viewusername = 'archas-srivastava-6LV3ZN79'

const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}

var [skills,setskill] = useState([])

function handleskill (){
  axios.get('https://linkedin-backend.azurewebsites.net/profile/skill/?username='+viewusername,config)
  .then((res)=>
  {
    console.log(res);
    setskill(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
}
useEffect(()=>handleskill())

function removeskill(skill:number){
    axios.delete("https://linkedin-backend.azurewebsites.net/profile/skill/"+skill+"/",config)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}

if(username!=viewusername)
    {
        var cols=document.getElementsByClassName('action') as HTMLCollectionOf<HTMLElement>
        for(var i = 0; i < cols.length; i++) {
            cols[i].style.visibility = 'hidden';
          }
    }

  return (
    <div>
      <Nav />
      <div id="viewskill">
          <img src={left} alt='back' onClick={() => Navhandler("/account")}/> <span>Skill</span> <img className="action" id="add" src={add} alt='add' onClick={() => Navhandler("/account/skills")}></img>
          <div>
              {            
                skills.map((box:any)=>{return <div style={{fontWeight: '700',fontSize: '1.5vw',borderBottom:"1px solid white",margin:"2vw 0"}}><p style={{display:"inline"}}>{box.skill_name}</p><img style={{float:"right",cursor:"pointer"}} className="action" src={del} onClick={()=>removeskill(box.id)} /></div>})
              }
          </div>
      </div>
          <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default Skill_View;
