import React, { useState } from "react"
import './otp.css' ;
import Input from '../components/authinput';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
const illustration: string = require("../images/otp.svg").default;

const Otp = () => {

    const [counter,setcounter] =useState(60);

  //   useEffect(()=>{
  //     const timer=
  //     seconds >0 && setInterval(()=>{
  //         setSeconds(seconds-1)
  //     },1000)
  //     return ()=> clearInterval(timer)
  // },[seconds])

    setInterval(()=>{
        if(counter===0)
        {
          setcounter(60);      
        }
        else{
        let newcount=counter-1;
        setcounter(newcount);
    }},1000);


    return <div>
    <Heading />  
    <img className="otp"src={illustration} alt="" />
    <div>
    <div id = "signup">
        <p className="topline">Check For OTP</p>
        <p className="middle">Enter the OTP sent to your email address </p>
        <input type='text' placeholder='Enter Otp' name="otp"
            // value={userOtp.otp}
            // onChange={handleInput}
            required
            maxLength={6}></input>
        <p className="lowline">Didn't get OTP?<span id="resend"> Resend OTP </span> 0:{counter}</p>
    
      <Authblock name="Verify" />
    </div>
    </div>
    </div>
}

export default Otp;
