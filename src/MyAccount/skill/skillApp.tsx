import axios from "axios";
import { config } from "process";
import React from "react";
import { useNavigate } from "react-router";
import Nav from "../../navbar/navbar";
import "./skill.css"

const Skill = () => {
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

function handleskill (e:any){
  const value:string = e.target.value
  console.log(value)
  axios.get('https://linkedin-backend.azurewebsites.net/profile/skill/list/?search_input='+value,config)
  .then((res)=>
  {
    console.log(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
}

  return (
    <div>
      <Nav />
      <div id="account_nav">
        <p  onClick={()=>{Navhandler("/account/edit_profile"); } }>Edit profile</p>
        <p  style={activestyle}>Skill Section</p>
        <p   onClick={()=>{Navhandler("/account/experience"); } }>Experience</p>
        <p onClick={()=>{Navhandler("/account/aboutme"); } }>About Me</p>
        <p onClick={()=>{Navhandler("/account/education"); } }>Education</p>
        <p onClick={()=>{Navhandler("/account/additional"); } } >Additional</p>
      </div>
      <div id="skill">
        <p>Skill Section</p>
        <div>
          Skill
          <br />
          <input placeholder="Enter Skill" onChange={handleskill}/>
        </div>
    <button>Save</button>
      </div>
    </div>
  );
};

export default Skill;
