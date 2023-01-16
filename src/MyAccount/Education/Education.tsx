import React from "react";
import Nav from "../../navbar/navbar";
import "../edit_profile/edit_profile.css";
import { useNavigate } from "react-router-dom";

const Experience = () => {

    const activestyle={
        color:'#A950FB' ,
        borderLeft:'3px solid #A950FB',
    }
    const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const time:any = new Date();
//   console.log(time);
    const Navhandler=useNavigate();
  return (
    <div>
      <Nav />
      <div id="account_nav">
        <p  onClick={()=>{Navhandler("/account/edit_profile"); } }>Edit profile</p>
        <p  onClick={()=>{Navhandler("/account/skills"); } }>Skill Section</p>
        <p   onClick={()=>{Navhandler("/account/experience"); } }>Experience</p>
        <p onClick={()=>{Navhandler("/account/aboutme"); } }>About Me</p>
        <p style={activestyle}>Education</p>
        <p onClick={()=>{Navhandler("/account/additional"); } } >Additional</p>
      </div>
      <div id="edit_profile"  style={{height:'125vh'}}>
        <p className="accountnavtopline">Education</p>
        <div>
          School
          <br />
          <input className="edit_input profileinput" placeholder="School" />
        </div>
        <div>
          Degree
          <br />
          <input className="edit_input profileinput" placeholder="Degree" />
        </div>
        <div>
          Field of Study
          <br />
          <input className="edit_input profileinput dropdown" placeholder="Field of Study" />
        </div>
        <div>
          Grade
          <br />
          <input className="edit_input profileinput" placeholder="Grade" />
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

export default Experience;
