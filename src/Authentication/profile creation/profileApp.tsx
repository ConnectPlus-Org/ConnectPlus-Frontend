import React, { useState } from 'react';
import './profile.css';
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import Loader from "../../loader";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
const illustration: string = require("../images/profile.svg").default;



function Profile(){
    
   const Navhandler =useNavigate();
    const [loading]=useState(false);
    const [fname,setfname]=useState("");
    const [lname,setlname]=useState("");
    const [country,setcountry]=useState("");
    const [city,setcity]=useState("");

    function handlefname(e:any){
        setfname(e.target.value);
    }
    function handlelname(e:any){
        setlname(e.target.value);
    }
    function handlecountry(e:any){
        setcountry(e.target.value);
    }
    function handlecity(e:any){
        setcity(e.target.value);
    }

    function handleclick(){
        {localStorage.setItem("fname",fname);
        localStorage.setItem("lname",lname);
        localStorage.setItem("country",country);
        localStorage.setItem("city",city);
        Navhandler("/profilehead");}
    }


    return <div>
    {loading?<Loader />:
    <div>
       <Heading /> 
       <img className='profileillustration' src={illustration} alt="illustration" />
       <div className='centrebox'>
        <p className='bigboi'>Make a Professional Profile</p>
        <Input  required={true} onchange={handlefname} type='text' lable='First Name' placeholder='Enter First Name' message='Enter Correct Name'/>
        <Input required={true} onchange={handlelname} type='text' lable='Last Name' placeholder='Enter Last Name' message='Enter Correct Name'/>
        <Input required={true} onchange={handlecountry} type='text' lable='Country/Region' placeholder='Enter Country' message='Enter Correct Country'/>
        <Input required={true} onchange={handlecity}  type='text' lable='City/District' placeholder='Enter City' message='Enter Correct City'/>
        {(fname && lname && country && city) && <Authblock onclick={handleclick} name='Next'/>}
       </div>
    </div>}</div>
}
export default Profile;