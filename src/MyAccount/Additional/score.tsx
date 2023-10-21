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
    BaseUrl.get(`/profile/myorganization/`,config)
      .then((res) => {
        console.log(res);
        setsearchres(res.data.my_organizations);
      })
      .catch((err) => { 
        console.log(err);
      });
    }

    const activestyle={
        color:'#A950FB' ,
        borderLeft:'3px solid #A950FB',
    }

    function handleApi(){

      const testmonth1= testmonth+1;
    
    
    const testdatestring ="" + testyear +"-"+testmonth1+"-01";

      let obj:any={
        "title":title,
        "score":score,
        "test_date":testdatestring,
        "description":description
        
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
      BaseUrl.post(`/profile/testscore/`,obj,config)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => { 
        console.log(err);
      });
    }
    
    const [association,setassociation] = useState(null);
    const [title,settitle] = useState("");
    const [score,setscore] = useState("");
    const [description,setdescription] = useState("");
    const curryear=new Date().getFullYear();
    const currmonth=new Date().getMonth();
    const [testmonth,settestmonth] = useState(currmonth);
    const [testyear,settestyear] = useState(curryear);
    const years = Array.from(new Array(20),(val, index) => curryear - index);
    const months =["January","February","March","April","May","June","July","August","Septempber","October","November","December"];

    const Navhandler=useNavigate();
  return (
    <div>
      <Nav />
      <div id="accountNav">
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
          <input  onChange={(e:any)=>{settitle(e.target.value);}} value={title} className="edit_input profileinput" placeholder="Title" />
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
          Score
          <br />
          <input  onChange={(e:any)=>{setscore(e.target.value);}} value={score} className="edit_input profileinput dropdown" placeholder="Score" />
        </div>
        
        
        <div>
            Test Date
            <br />
            <select className="halfbox" onChange={(e:any)=>{settestmonth(e.target.value);}} name="month" id="month" >
            {
            months.map((month, index) => {
              return <option key={`month${index}`} value={index}>{month}</option>
            })
           }
          </select>
          <select style={{marginLeft:'3.8vw'}}  className="halfbox" onChange={(e:any)=>{settestyear(e.target.value);}} name="month" id="month" >
            {
            years.map((year, index) => {
              return <option key={`year${index}`} value={year}>{year}</option>
            })
           }
          </select>
        </div>
        
        <div>
          Description
          <br />
          <textarea  onChange={(e:any)=>{setdescription(e.target.value);}} value={description} id="desc" className="edit_input profileinput" placeholder="Description" />
        </div>
        
        <button  onClick={handleApi}>Save</button>
      </div>
    </div>
  );
};

export default Score;
