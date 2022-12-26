import React, { useEffect, useState } from "react"
import './otp.css' ;
import Input from '../components/authinput';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
import Otpbox from '../components/otpbox';
const illustration: string = require("../images/otp.svg").default;

const Otp = () => {

    const [seconds,setSeconds] =useState(60);

    // setInterval(()=>{
    //     if(counter===0)
    //     {
    //       setcounter(60);      
    //     }
    //     else{
    //     let newcount=counter-1;
    //     setcounter(newcount);
    // }},1000);

    // e.next("input").focus()
    
    useEffect(()=>{
        const timer:any=
        seconds >0 && setInterval(()=>{
            setSeconds(seconds-1)
        },1000)
        return ()=> clearInterval(timer)
    },[seconds])

    return <div>
    <Heading />  
    <img className="otpillustration"src={illustration} alt="" />
    <div>
    <div id = "signup">
        <p className="topline">Check For OTP</p>
        <p className="middle">Enter the OTP sent to your email address </p>
        <Otpbox />
        <p className="lowline">Didn't get OTP?<span id ="resend" onClick={() => setSeconds(60)}> Resend OTP </span> 0:{seconds}</p>
    
      <Authblock name="Verify" />
    </div>
    </div>
    </div>
}

export default Otp;
