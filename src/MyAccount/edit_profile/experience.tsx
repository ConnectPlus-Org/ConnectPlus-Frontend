import React, { useState } from "react";
import Nav from "../../navbar/navbar";
import "./edit_profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loader from "../../loader"
import Boxcomponent from "./boxcomponent"
import BaseUrl from "../../BaseUrl";

const Experience = () => {
  window.onclick = () => {
    const i:any = document.getElementById("i")
  if(i === document.activeElement)
    document.getElementById("drop")!.style.visibility = "visible";
  else
    document.getElementById("drop")!.style.visibility = "hidden";
  }

    const [searchres,setsearchres] = useState([]);
    const [title,settitle] = useState("");
    const [company,setcompany] = useState("");
    const [emptype,setemptype] = useState(1);
    const [location,setlocation] = useState("");
    const [industry,setindustry] = useState("");
    const [description,setdescription] = useState("");
    const curryear=new Date().getFullYear();
    const currmonth=new Date().getMonth();
    const [startmonth,setstartmonth] = useState(currmonth);
    const [startyear,setstartyear] = useState(curryear);
    const [endmonth,setendmonth] = useState(currmonth);
    const [endyear,setendyear] = useState(curryear);

    const years = Array.from(new Array(20),(val, index) => curryear - index);
    const months =["January","February","March","April","May","June","July","August","Septempber","October","November","December"];
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
    BaseUrl.get(`/profile/organization/?search_input=${e.target.value}`,config)
    .then((res) => {
      console.log(res);
      setsearchres(res.data);
    })
    .catch((err) => { 
      console.log(err);
    });

  }

  function handleapi(){
    const startmonth1= startmonth+1;
    const endmonth1= endmonth+1;
    
    
    const startdatestring ="" + startyear +"-"+startmonth1+"-01";
    const enddatestring ="" + endyear +"-"+endmonth1+"-01";
    
    console.log(startdatestring);
    let req;
    req={
        "role":title,
      "location":location,
      "currently_working":checked,
    "start_date":startdatestring,
    "industry":industry,
    "employment_type":emptype,
    "description":description
    }
    if(!checked)
    {
     req={...req,"end_date":enddatestring};  
    }
    const compid=parseInt(sessionStorage.getItem("companyid")!, 10);
    if(compid && sessionStorage.getItem("compname")===company)
    {
     req={...req,"company":compid};  
    }
    else
    {
      req={...req,"company":company}; 
    }
    BaseUrl.post("/profile/experience/",req,config)
    .then((res) => {
      console.log(res);
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
          <input id="i" onChange={handlecompanyname} className="edit_input profileinput" value={company} placeholder="Company Name" />
          <div id="drop" className="dropsearchbox" onClick={()=>{setsearchres([]); const compname:string=sessionStorage.getItem("compname")!; setcompany(compname)}}>
            {
              searchres.map((box:any)=>{return <Boxcomponent key={box.id} box={box} />})
            }
          </div>
        </div>
        <div>
          Employment Type
          <br />
          {/* <input onChange={(e:any)=>{setemptype(e.target.value);}} className="edit_input profileinput dropdown" placeholder="Employment Type" /> */}
          <select onChange={(e:any)=>{setemptype(e.target.value);}} name="emptype" id="emptype" >
            <option  value={1}>Part-Time</option>
            <option  value={2}>Full-Time</option>
            <option  value={3}>Self-Employed</option>
          </select>
        </div>
        <div>
          Location
          <br />
          <input onChange={(e:any)=>{setlocation(e.target.value);}} value={location} className="edit_input profileinput" placeholder="Location" />
        </div>
        <div>
         {checked ? <div className="tickbox" onClick={handleChange}> <div className="tick"></div></div> : <div className="checkbox" onClick={handleChange}></div>} <span className="checkboxlabel">I am currently working on this role</span>
        </div>
        <div>
            Start Date
            <br />
            {/* <input className="edit_input profileinput dropdown halfbox" placeholder="Month"/> */}
            <select className="halfbox" onChange={(e:any)=>{setstartmonth(e.target.value);}} name="month" id="month" >
            {
            months.map((month, index) => {
              return <option key={`month${index}`} value={index}>{month}</option>
            })
           }
          </select>
          <select style={{marginLeft:'3.8vw'}}  className="halfbox" onChange={(e:any)=>{setstartyear(e.target.value);}} name="month" id="month" >
            {
            years.map((year, index) => {
              return <option key={`year${index}`} value={year}>{year}</option>
            })
           }
          </select>
            {/* <input style={{marginLeft:'3.8vw'}} className="edit_input profileinput dropdown halfbox" placeholder="Year"/> */}
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
            <select className="halfbox" onChange={(e:any)=>{setendmonth(e.target.value);}} name="month" id="month" >
            {
            months.map((month, index) => {
              return <option key={`month${index}`} value={index}>{month}</option>
            })
           }
          </select>
          <select style={{marginLeft:'3.8vw'}}  className="halfbox" onChange={(e:any)=>{setendyear(e.target.value);}} name="month" id="month" >
            {
            years.map((year, index) => {
              return <option key={`year${index}`} value={year}>{year}</option>
            })
           }
          </select>
        </div>}
        <div>
          Industry
          <br />
          <input  onChange={(e:any)=>{setindustry(e.target.value);}} value={industry} className="edit_input profileinput" placeholder="Industry" />
        </div>
        <div>
          Description
          <br />
          <textarea  onChange={(e:any)=>{setdescription(e.target.value);}} value={description} id="desc" className="edit_input profileinput" placeholder="Description" />
        </div>
        <div id="middiv">
        <p className="midtext">Skills</p>
        <p className="midline">We recommend adding your top 5 used in this role. They'll also appear in your Skills section. </p>
        <input className="edit_input profileinput" placeholder="Enter Skill" />
        </div>
        <button onClick={handleapi}>Save</button>
      </div>
    </div>
  );
};

export default Experience;
