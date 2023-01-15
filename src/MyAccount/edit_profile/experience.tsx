import React from "react";
import Nav from "../../navbar/navbar";
import "./edit_profile.css";
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
    const Navhandler=useNavigate();
  return (
    <div>
      <Nav />
      <div id="account_nav">
        <p  onClick={()=>{Navhandler("/account/edit_profile"); } }>Edit profile</p>
        <p  onClick={()=>{Navhandler("/account/skills"); } }>Skill Section</p>
        <p style={activestyle} >Experience</p>
        <p onClick={()=>{Navhandler("/account/aboutme"); } }>About Me</p>
        <p onClick={()=>{Navhandler("/account/education"); } }>Education</p>
        <p onClick={()=>{Navhandler("/account/additional"); } } >Additional</p>
      </div>
      <div id="edit_profile"  style={{height:'168.75vh'}}>
        <p className="accountnavtopline">Experience</p>
        <div>
          Title
          <br />
          <input className="edit_input profileinput" placeholder="Title" />
        </div>
        <div>
          Company Name
          <br />
          <input className="edit_input profileinput" placeholder="Company Name" />
        </div>
        <div>
          Employment Type
          <br />
          <input className="edit_input profileinput dropdown" placeholder="Employment Type" />
        </div>
        <div>
          Location
          <br />
          <input className="edit_input profileinput" placeholder="Location" />
        </div>
        <div>
         {checked ? <div className="tickbox" onClick={handleChange}> <div className="tick"></div></div> : <div className="checkbox" onClick={handleChange}></div>} <span className="checkboxlabel">I am currently working on this role</span>
        </div>
        <div>
            Start Date
            <br />
            <input className="edit_input profileinput dropdown halfbox" placeholder="Month"/>
            <input style={{marginLeft:'3.8vw'}} className="edit_input profileinput dropdown halfbox" placeholder="Year"/>
        </div>
        {checked ? 
        <div style={{opacity:'50%'}}>
            End Date
            <br />
            <input className="edit_input profileinput dropdown halfbox" placeholder="Month" readOnly/>
            <input style={{marginLeft:'3.8vw'}} className="edit_input profileinput dropdown halfbox" placeholder="Year" readOnly/>
        </div> 
        : 
        <div>
            End Date
            <br />
            <input className="edit_input profileinput dropdown halfbox" placeholder="Month"/>
            <input style={{marginLeft:'3.8vw'}} className="edit_input profileinput dropdown halfbox" placeholder="Year"/>
        </div>}
        <div>
          Industry
          <br />
          <input className="edit_input profileinput" placeholder="Industry" />
        </div>
        <div>
          Description
          <br />
          <textarea className="edit_input profileinput" placeholder="Description" />
        </div>
        <p className="midtext">Skills</p>
        <p className="midline">We recommend adding your top 5 used in this role. They’ll also appear in your Skills section. </p>
        <input className="edit_input profileinput" placeholder="Enter Skill" />
        <button>Save</button>
      </div>
    </div>
  );
};

export default Experience;
