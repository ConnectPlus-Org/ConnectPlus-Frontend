import React, { useEffect, useState } from "react"
import './phoneotp.css' ;
import Input from '../components/authinput';
import Authblock from '../components/authblock';
import OtpField from 'react-otp-field';
import Heading from '../components/heading';
import Otpbox from '../components/otpbox';
import axios from "axios";
const illustration: string = require("../images/otp.svg").default;

const Phoneotp = () => {

    const [seconds,setSeconds] =useState(60);
    const [value, setValue] = useState('');

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

    function handleapi(){
        // const email=localStorage.getItem("email");
        // axios.post("https://linkedin-back.azurewebsites.net/auth/otp/email/verify/",{
        //     email:email,
        //     otp:value
        // }).then((res) => {
        //     console.log(res.data);
        //   })
        //     .catch((err) => {
        //       console.log(err);
        //     }
        //     );
    }

    return <div>
    <Heading />  
    <img className="otpillustration"src={illustration} alt="" />
    <div>
    <div id = "otpbox">
        <p className="topline">Check For OTP</p>
        <p className="middle">Enter the OTP sent to your Phone number </p>
        <OtpField
            value={value}
            onChange={setValue}
            numInputs={6}
            onChangeRegex={/^([0-9]{0,})$/}
            autoFocus
            separator={<span></span>}
            isTypeNumber
            inputProps={{ className: 'otp-field__input', disabled: false }}
        />
        <p className="lowline">Didn't get OTP?<span id ="resend" onClick={() => setSeconds(60)}> Resend OTP </span> 0:{seconds}</p>
    
      <Authblock name="Verify" onclick={handleapi}/>
    </div>
    </div>
    </div>
}

export default Phoneotp;
