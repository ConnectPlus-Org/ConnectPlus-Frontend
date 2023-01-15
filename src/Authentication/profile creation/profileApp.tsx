import React, { useState } from 'react';
import './profile.css';
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import Loader from "../../loader";
const illustration: string = require("../images/profile.svg").default;



function Profile(){
    
   
    const [loading]=useState(false);

    return <div>
    {loading?<Loader />:
    <div>
       <Heading /> 
       <img className='profileillustration' src={illustration} alt="illustration" />
       <div className='centrebox'>
        <p className='bigboi'>Make a Professional Profile</p>
        <Input type='text' lable='First Name' placeholder='Enter First Name' message='Enter Correct Name'/>
        <Input type='text' lable='Last Name' placeholder='Enter Last Name' message='Enter Correct Name'/>
        <Input type='text' lable='Country/Region' placeholder='Enter Country' message='Enter Correct Country'/>
        <Input  type='text' lable='City/District' placeholder='Enter City' message='Enter Correct City'/>
        <Authblock name='Next'/>
       </div>
    </div>}</div>
}
export default Profile;