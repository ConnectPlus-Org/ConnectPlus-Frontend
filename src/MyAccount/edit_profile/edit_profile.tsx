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
        <p  style={activestyle}>Edit profile</p>
        <p>Skill Section</p>
        <p onClick={()=>{Navhandler("/account/experience"); } }>Experience</p>
        {/* <a href="/account/experience" >Experience</a> */}
        <p>About Me</p>
        <p>Education</p>
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
          <input className="profileinput" id="headline" placeholder="Heading"/>
        </div>
    <button>Save</button>
      </div>
    </div>
  );
};

export default Editprofile;
