import React, { useState } from 'react';
import './profile.css';
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import axios from 'axios';
import Loader from "../../loader";
const illustration: string = require("../images/profile.svg").default;



function Profile(){
    
   
    const [loading,setLoading]=useState(false);
    

    
    let inputstyle={
        // width:'32.9861vw'
        // display:'none',
    }
   

    return <div>
    {loading?<Loader />:
    <div>
       <Heading /> 
       <img className='profileillustration' src={illustration} alt="illustration" />
       <div className='centrebox'>
        <p className='bigboi'>Make a Professional Profile</p>
        <Input style={inputstyle} type='text' lable='First Name' placeholder='Enter First Name' message='Enter Correct Name'/>
        <Input style={inputstyle} type='text' lable='Last Name' placeholder='Enter Last Name' message='Enter Correct Name'/>
        <Input style={inputstyle} type='text' lable='Country/Region' placeholder='Enter Country' message='Enter Correct Country'/>
        <Input  style={inputstyle} type='text' lable='City/District' placeholder='Enter City' message='Enter Correct City'/>
        <Authblock name='Next'/>
       </div>
    </div>}</div>
}
export default Profile;