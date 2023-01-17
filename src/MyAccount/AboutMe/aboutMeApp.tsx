import React from "react";
import { useNavigate } from "react-router";
import Nav from "../../navbar/navbar";
import "../skill/skill.css"

const AboutMe = () => {

  const activestyle={
    color:'#A950FB' ,
    borderLeft:'3px solid #A950FB'
}

  const Navhandler=useNavigate();
  return (
    <div>
      <Nav />
      <div id="account_nav">
        <p onClick={()=>{Navhandler("/account/edit_profile"); } }>Edit profile</p>
        <p  onClick={()=>{Navhandler("/account/skills"); } }>Skill Section</p>
        <p  onClick={()=>{Navhandler("/account/experience"); } }>Experience</p>
        <p style={activestyle}>About Me</p>
        <p onClick={()=>{Navhandler("/account/education"); } }>Education</p>
        <p onClick={()=>{Navhandler("/account/additional"); } } >Additional</p>
      </div>
      <div id="skill">
        <p>About Me</p>
        <div>
          About Me
          <br />
          <textarea id="aboutme"/>
        </div>
    <button>Save</button>
      </div>
    </div>
  );
};

export default AboutMe;
