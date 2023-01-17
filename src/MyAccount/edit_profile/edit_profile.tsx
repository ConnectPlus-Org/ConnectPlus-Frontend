import React from "react";
import Nav from "../../navbar/navbar";
import "./edit_profile.css";
import { useNavigate } from "react-router-dom";
const Editprofile = () => {
  const activestyle={
    color:'#A950FB' ,
    borderLeft:'3px solid #A950FB'
}

  const Navhandler=useNavigate();
  return (
    <div>
      <Nav />
      <div id="account_nav">
        <p style={activestyle} >Edit profile</p>
        <p  onClick={()=>{Navhandler("/account/skills"); } }>Skill Section</p>
        <p  onClick={()=>{Navhandler("/account/experience"); } }>Experience</p>
        <p onClick={()=>{Navhandler("/account/aboutme"); } }>About Me</p>
        <p onClick={()=>{Navhandler("/account/education"); } }>Education</p>
        <p onClick={()=>{Navhandler("/account/additional"); } } >Additional</p>
      </div>
      <div id="edit_profile">
        <img alt="" />
        <div>
          First Name
          <br />
          <input className="edit_input profileinput" placeholder="First Name" />
        </div>
        <div>
          Last Name
          <br />
          <input className="edit_input profileinput" placeholder="Last Name" />
        </div>
        <div>
          Country/Region
          <br />
          <input className="edit_input profileinput" placeholder="Country/Region" />
        </div>
        <div>
          City/District
          <br />
          <input className="edit_input profileinput" placeholder="City/District" />
        </div>
        <div>
          Headline
          <br />
          <textarea id="headline" placeholder="Heading"/>
        </div>
    <button>Save</button>
      </div>
    </div>
  );
};

export default Editprofile;
