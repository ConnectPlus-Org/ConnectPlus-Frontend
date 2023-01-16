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
      <div id="edit_profile"  style={{height:'101.389vh'} }>
        <div className="additionalline">
        Add test scores
        </div>
        <div>
          Title
          <br />
          <input className="edit_input profileinput" placeholder="Title" />
        </div>
        <div>
          Associated With
          <br />
          <input className="edit_input dropdown profileinput" placeholder="Associated With" />
        </div>
        <div>
          Score
          <br />
          <input className="edit_input profileinput dropdown" placeholder="Score" />
        </div>
        
        
        <div>
            Start Date
            <br />
            <input className="edit_input profileinput dropdown halfbox" placeholder="Month"/>
            <input style={{marginLeft:'3.8vw'}} className="edit_input profileinput dropdown halfbox" placeholder="Year"/>
        </div>
        
        <div>
            End Date
            <br />
            <input className="edit_input profileinput dropdown halfbox" placeholder="Month"/>
            <input style={{marginLeft:'3.8vw'}} className="edit_input profileinput dropdown halfbox" placeholder="Year"/>
        </div>
        
        <div>
          Description
          <br />
          <textarea id="desc" className="edit_input profileinput" placeholder="Description" />
        </div>
        
        <button>Save</button>
      </div>
    </div>
  );
};

export default Score;
