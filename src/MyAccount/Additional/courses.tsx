import React, { useState } from "react";
import Nav from "../../navbar/navbar";
import "../edit_profile/edit_profile.css";
import "./additional.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../BaseUrl";

const Score = () => {

  const [searchres,setsearchres] = useState([]);
  var accesstoken=localStorage.getItem("accesstoken");
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    };
    
    function handleassociations(){
    BaseUrl.get('/profile/myorganization/',config)
      .then((res) => {
        console.log(res);
        setsearchres(res.data.my_organizations);
      })
      .catch((err) => { 
        console.log(err);
      });
    }

    function handleApi(){

      let obj:any={
        "course_name":coursename,
        "course_number":number,
      }
      if(association===undefined || association===null)
      {
        obj={...obj,"organization":null}
      }
      else
      {
        const asso=parseInt(association, 10);
        obj={...obj,"organization":asso};
      }
      BaseUrl.post('/profile/course/',obj,config)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => { 
        console.log(err);
      });
    }
    
    const activestyle={
        color:'#A950FB' ,
        borderLeft:'3px solid #A950FB',
    }

    const [association,setassociation] = useState(null);
    const [coursename,setcoursename] = useState("");
    const [number,setnumber] = useState("");
    


  const time:any = new Date();
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
      <div id="edit_profile"  style={{height:'78.3333vh',justifyContent:'space-evenly '}}>
        <div className="additionalline">
        Add courses
        </div>
        <div>
          Course name
          <br />
          <input onChange={(e:any)=>{setcoursename(e.target.value);}} className="edit_input profileinput" value={coursename} placeholder="Course name" />
        </div>
        <div>
          Associated With
          <br />
          <select onClick={handleassociations} onChange={(e:any)=>{setassociation(e.target.value);}} name="month" id="month" >
            
              <option value={undefined}>None</option>
            {
            searchres.map((associ:any) => {
              return <option key={`associ${associ.organization}`} value={associ.organization}>{associ.tagline}</option>
            })
           }
          </select>
        </div>
        <div>
          Number
          <br />
          <input  onChange={(e:any)=>{setnumber(e.target.value);}} value={number}className="edit_input profileinput dropdown" placeholder="Number" />
        </div>
        
        
        <button onClick={handleApi}>Save</button>
      </div>
    </div>
  );
};

export default Score;
