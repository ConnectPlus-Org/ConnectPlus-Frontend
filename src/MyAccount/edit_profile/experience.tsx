import React, { useState } from "react";
import Nav from "../../navbar/navbar";
import "./edit_profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loader from "../../loader"
import Boxcomponent from "./boxcomponent"

const Experience = () => {
    const [searchres,setsearchres] = useState([]);
    const [title,settitle] = useState("");
    const [company,setcompany] = useState("");
    const [emptype,setemptype] = useState("");
    var accesstoken=localStorage.getItem("accesstoken");
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    };

    const activestyle={
        color:'#A950FB' ,
        borderLeft:'3px solid #A950FB',
    }
    const [checked, setChecked] = React.useState(false);

  function handlecompanyname(e:any){
    setcompany(e.target.value);
    axios.get(`https://linkedin-backend.azurewebsites.net/profile/organization/?search_input=${e.target.value}`,config)
    .then((res) => {
      console.log(res);
      setsearchres(res.data);
    })
    .catch((err) => { 
      console.log(err);
    });

  }

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
          <input onChange={(e:any)=>{settitle(e.target.value);}} className="edit_input profileinput" placeholder="Title" />
        </div>
        <div>
          Company Name
          <br />
          <input onChange={handlecompanyname} className="edit_input profileinput" value={company} placeholder="Company Name" />
          <div className="dropsearchbox" onClick={()=>{setsearchres([]); const compname:string=sessionStorage.getItem("compname")!; setcompany(compname)}}>
            {
              searchres.map((box:any)=>{return <Boxcomponent key={box.id} box={box} />})
            }
          </div>
        </div>
        <div>
          Employment Type
          <br />
          <input onChange={(e:any)=>{setemptype(e.target.value);}} className="edit_input profileinput dropdown" placeholder="Employment Type" />
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
          <textarea id="desc" className="edit_input profileinput" placeholder="Description" />
        </div>
        <div id="middiv">
        <p className="midtext">Skills</p>
        <p className="midline">We recommend adding your top 5 used in this role. They'll also appear in your Skills section. </p>
        <input className="edit_input profileinput" placeholder="Enter Skill" />
        </div>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Experience;
