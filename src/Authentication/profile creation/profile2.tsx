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
        width:'100%'
    }
    let inputstyle2={
        // width:'32.9861vw'
        // display:'none',
        height:'100px',
        maxlength:'5'
    }
   

    return <div>
    {loading?<Loader />:
    <div>
       <Heading /> 
       <img className='profileillustration' src={illustration} alt="illustration" />
       <div className='centrebox smol'>
        <p className='bigboi'>Make a Professional Profile</p>
       
       <Input type='text' style={inputstyle} inputheight={inputstyle2} lable='Headline' placeholder='Enter Headline' message='Enter valid Heading'/>
        <Authblock name='Next'/>
       </div>
    </div>}</div>
}
export default Profile;