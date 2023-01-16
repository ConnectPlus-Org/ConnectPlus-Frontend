import React, { useState } from 'react';
import './profile.css';
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import Loader from "../../loader";
import { useNavigate } from 'react-router';
import axios from 'axios';


const illustration: string = require("../images/profile.svg").default;
const edit:string = require("../images/edit.svg").default;
var accesstoken=localStorage.getItem("accesstoken");
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    };

function ProfileHead(){
    const Navhandler =useNavigate();
    const [loading,setLoading]=useState(false);

    const fname = sessionStorage.getItem("fname");
    const lname = sessionStorage.getItem("lname");
    const country = sessionStorage.getItem("country");
    const city = sessionStorage.getItem("city");

    if(!fname && !lname && !country && !city)
    Navhandler("/profile");

   const boxstyle = {
       height: '35vw'
   }
    const [headline,setheadline]=useState("");

    function handlechange(e:any){
      setheadline(e.target.value);
    }

    function handleapi(){
      
    const object = 
    {"first_name": fname,
    "last_name": lname,
    "country": country,
    "city": city,
    "headline": headline};
    
    axios.post(
          "https://linkedin-backend.azurewebsites.net/profile/userprofile/",
          object,config)
        .then((res) => {
          console.log(res);
          setLoading(false);
          // Navhandler("/foodadd");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }

    return <div>
    {loading?<Loader />:
    <div>
       <Heading /> 
       <img className='profileillustration' src={illustration} alt="illustration" />
       <div className='centrebox' style={boxstyle}>
        <p className='bigboi'>Make a Professional Profile</p>
        <div id="ava"><img id="avatar" alt="" /><img id="editavatar" src={edit} alt="" /></div>
        <div>
          Headline
          <br />
          <textarea onChange={handlechange} id="prof_head" placeholder="Heading"/>
        </div>
        <Authblock onclick={handleapi} name='Next'/>
       </div>
    </div>}</div>
}
export default ProfileHead;