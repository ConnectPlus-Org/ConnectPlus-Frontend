import axios from "axios";
import { toNamespacedPath } from "node:path/win32";
import { config } from "process";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../../../navbar/navbar";
import { ToastContainer, toast } from 'react-toastify';
import '../view.css'
import ExperienceBox from "../components/experience";
import BaseUrl from "../../../BaseUrl";
const left:string = require('../images/leftarrow.svg').default
const add:string = require('../images/add.svg').default
const edit:string = require('../images/edit.svg').default

const Experience_View = () => {
  const Navhandler= useNavigate();
  const activestyle={
    color:'#A950FB' ,
    borderLeft:'3px solid #A950FB',
   
}
const username = localStorage.getItem("username") || ""
var accesstoken=localStorage.getItem("accesstoken");
var viewusername = localStorage.getItem("viewusername");

const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}

var [experience,setexp] = useState([])

function handlExp (){
  BaseUrl.get('/profile/experience/?username='+viewusername,config)
  .then((res)=>
  {
    console.log(res);
    setexp(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
}
useEffect(()=>handlExp(),[])

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
      <div id="viewSkill">
        <img src={left} alt='back' onClick={() => Navhandler("/account")}/> <span>Experience</span> <img className="action" id="add" src={add} alt='add' onClick={() => Navhandler("/account/experience")}></img>
        <div>
            {
            experience.map((box:any)=>{return <ExperienceBox key={box.id} box={box} />})
            }
        </div>
      </div>
        <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default Experience_View;
