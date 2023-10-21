import React from "react";
import Nav from "../../navbar/navbar";
import "../edit_profile/edit_profile.css";
import "./additional.css"
import { useNavigate } from "react-router-dom";

const arr: string = require("../Main/images/arrow.svg").default;
const Additional = () => {

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
      <div id="accountNav">
        <p  onClick={()=>{Navhandler("/account/edit_profile"); } }>Edit profile</p>
        <p  onClick={()=>{Navhandler("/account/skills"); } }>Skill Section</p>
        <p   onClick={()=>{Navhandler("/account/experience"); } }>Experience</p>
        <p onClick={()=>{Navhandler("/account/aboutme"); } }>About Me</p>
        <p onClick={()=>{Navhandler("/account/education"); } }>Education</p>
        <p  onClick={()=>{Navhandler("/account/additional"); } } style={activestyle}  >Additional</p>
      </div>
      <div id="edit_profile"  style={{height:'77.7778vh',display:'block'}}>
        <div className="linkbox" onClick={()=>{Navhandler("/account/additional/score")}}>
            Add test score
            <div className="rightarrowbox">
                <div className="rightarrow"></div>
            </div>
        </div>
        <div className="linkbox" onClick={()=>{Navhandler("/account/additional/courses")}}>
            Add courses
            <div className="rightarrowbox">
            <div className="rightarrow"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
