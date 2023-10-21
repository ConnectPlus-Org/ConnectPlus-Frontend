import axios from "axios";
import { config } from "process";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../../../navbar/navbar";
import { ToastContainer, toast } from 'react-toastify';
import '../view.css'
import EducationBox from "../components/educationbox";
import BaseUrl from "../../../BaseUrl";
const left:string = require('../images/leftarrow.svg').default
const add:string = require('../images/add.svg').default
const edit:string = require('../images/edit.svg').default

const Education_View = () => {
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

var [education,setedu] = useState([])

function handlEdu (){
  BaseUrl.get('/profile/education/?username='+viewusername,config)
  .then((res)=>
  {
    console.log(res);
    setedu(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
}
useEffect(()=>handlEdu(),[])

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
            education.map((box:any)=>{return <div><EducationBox key={box.id} box={box} /></div>})
            }
        </div>
      </div>
        <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default Education_View;
