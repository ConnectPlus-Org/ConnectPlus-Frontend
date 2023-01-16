import React from "react";
import Nav from "../../navbar/navbar";
import "../edit_profile/edit_profile.css";
import "./additional.css"
import { useNavigate } from "react-router-dom";

const Score = () => {

    const activestyle={
        color:'#A950FB' ,
        borderLeft:'3px solid #A950FB',
    }


    
  const time:any = new Date();
//   console.log(time);
    const Navhandler=useNavigate();
  return (
    <div>
      <Nav />
      <div id="account_nav">
        <p  onClick={()=>{Navhandler("/account/edit_profile"); } }>Edit profile</p>
        <p  onClick={()=>{Navhandler("/account/skills"); } }>Skill Section</p>
        <p  onClick={()=>{Navhandler("/account/experience"); } } >Experience</p>
        <p onClick={()=>{Navhandler("/account/aboutme"); } }>About Me</p>
        <p onClick={()=>{Navhandler("/account/education"); } }>Education</p>
        <p onClick={()=>{Navhandler("/account/additional"); } } style={activestyle}  >Additional</p>
      </div>
      <div id="edit_profile"  style={{height:'78.3333vh;'}}>
        <div className="additionalline">
        Add courses
        </div>
        <div>
          Course name
          <br />
          <input className="edit_input profileinput" placeholder="Course name" />
        </div>
        <div>
          Associated With
          <br />
          <input className="edit_input dropdown profileinput" placeholder="Associated With" />
        </div>
        <div>
          Number
          <br />
          <input className="edit_input profileinput dropdown" placeholder="Number" />
        </div>
        
        
        <button>Save</button>
      </div>
    </div>
  );
};

export default Score;
