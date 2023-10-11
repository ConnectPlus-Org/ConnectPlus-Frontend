import axios from "axios";
import { toNamespacedPath } from "node:path/win32";
import { config } from "process";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../../../navbar/navbar";
import { ToastContainer, toast } from 'react-toastify';
import '../view.css'
import BaseUrl from "../../../BaseUrl";
const left:string = require('../images/leftarrow.svg').default
const add:string = require('../images/add.svg').default
const del:string = require('../images/delete.svg').default

const Skill_View = () => {
  const Navhandler= useNavigate();
  const activestyle={
    color:'#A950FB' ,
    borderLeft:'3px solid #A950FB',
   
}
const skillist = document.getElementsByClassName('endorse') as HTMLCollectionOf<HTMLElement>
const username = sessionStorage.getItem("username") || ""
var accesstoken=localStorage.getItem("accesstoken");
var viewusername = sessionStorage.getItem('viewusername')

const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}

const [reload,setreload] = useState(false)
var [skills,setskill] = useState([])

function handleskill (){
  BaseUrl.get('/profile/skill/?username='+viewusername,config)
  .then((res)=>
  {
    setskill(res.data);
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })
}
useEffect(()=>handleskill(),[reload])

function removeskill(skill:number){
    BaseUrl.delete("/profile/skill/"+skill+"/",config)
    .then((res)=>{
        console.log(res)
        setreload(!reload)
    })
    .catch((err)=>{
        console.log(err)
    })
}

useEffect(()=>{if(username!=viewusername)
    {
        var cols=document.getElementsByClassName('action') as HTMLCollectionOf<HTMLElement>
        for(var i = 0; i < cols.length; i++) {
            cols[i].style.visibility = 'hidden';
        }
    }})

  function doEndorse(skillid:number,index:number) {
    BaseUrl.post('/profile/skill/endorse/',{id:skillid},config)
    .then((res)=>{
      console.log(res)
      if(skillist[index]!.innerHTML==="Endorse")
      {skillist[index]!.innerHTML="Endorsed"
      toast.info("You Have Endorsed this skill")
    }
    else
      {skillist[index]!.innerHTML="Endorse"
      toast.info("You Have removed the Endorsement from this skill")
    }
    })
      .catch((err)=>{
      console.log(err)
      toast.error("Skill is not endorsed")
    })
  }
  return (
    <div>
      <Nav />
      <div id="viewskill">
          <img src={left} alt='back' onClick={() => Navhandler("/account")}/> <span>Skill</span> <img className="action" id="add" src={add} alt='add' onClick={() => Navhandler("/account/skills")}></img>
          <div>
              {            
                skills.map((box:any,index)=>{return <div key={box.id} style={{fontWeight: '700',fontSize: '1.5vw',borderBottom:"1px solid white",margin:"2vw 0"}}><p style={{display:"inline",paddingBottom:"1vw"}}>{box.skill_name}</p><img style={{float:"right",cursor:"pointer"}} className="action" src={del} onClick={()=>{removeskill(box.id)}} />
                {(username!=viewusername)?((box.endorsed===false)?<span onClick={()=>doEndorse(box.id,index)} className="endorse">Endorse</span>:<span onClick={()=>doEndorse(box.id,index)} className="endorse">Endorsed</span>):null}</div>})
              }
          </div>
      </div>
          <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default Skill_View;
