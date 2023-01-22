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
var accesstoken = localStorage.getItem("accesstoken");
      const config ={
      headers:{
    Authorization:`Bearer ${accesstoken}`,
      }}

function ProfileHead(this: any){
    const Navhandler =useNavigate();
    const [loading,setLoading]=useState(false);
    const fname:string = (sessionStorage.getItem("fname") || (""));
    const lname:string = (sessionStorage.getItem("lname") || (""));
    const country:string = (sessionStorage.getItem("country") || (""));
    const city:string = (sessionStorage.getItem("city") || (""));

    if(!fname && !lname && !country && !city)
    Navhandler("/profile");

   const boxstyle = {
       height: '35vw'
   }
    const [headline,setheadline]=useState("");

    function handlechange(e:any){
        setheadline(e.target.value);
    }

    const inputavatar = () => {
        document.getElementById('inpava')?.click()
    }

    const [fileData, setFileData] = useState('')

    function handleavatar(e:any) {
        setFileData(e.target.files[0])
        console.log(fileData)
    }

    function handleapi(){
      
    const object = new FormData()
    object.append("first_name",fname)
    object.append("last_name",lname)
    object.append("country",country)
    object.append("city",city)
    object.append("headline",headline)
    object.append("avatar",fileData)
    
    axios.post(
          "https://linkedin-backend.azurewebsites.net/profile/userprofile/",
          object,config)
        .then((res) => {
          console.log(res);
          sessionStorage.clear();
          sessionStorage.setItem("avatar",res.data.avatar) 
          sessionStorage.setItem("username",res.data.username) 
          sessionStorage.setItem("name",res.data.first_name + " " + res.data.last_name) 
          sessionStorage.setItem("headLine",res.data.headline) 
          setLoading(false);
          Navhandler('/')
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
        <div id="ava"><input type="file" id="inpava" style={{display:'none'}} onChange={handleavatar}/><img id="avatar" alt="" /><img id="editavatar" src={edit} alt="" onClick={inputavatar}/></div>
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