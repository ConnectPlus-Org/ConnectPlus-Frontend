import React, { useEffect, useState } from "react"
import './otp.css' ;
import Input from '../components/authinput';
import Authblock from '../components/authblock';
import OtpField from 'react-otp-field';
import Heading from '../components/heading';
import Otpbox from '../components/otpbox';
import Loader from "../../loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const illustration: string = require("../images/otp.svg").default;

const Otp = () => {

    const Navhandler = useNavigate();
    const [seconds,setSeconds] =useState(60);
    const [value, setValue] = useState('');
    const [loading,setLoading]=useState(false);

   useEffect(()=>{
        const timer:any=
        seconds >0 && setInterval(()=>{
            setSeconds(seconds-1)
        },1000)
        return ()=> clearInterval(timer)
    },[seconds])

    function ResendApi(){
        if(seconds===0){
    const email=localStorage.getItem("email");
    axios.post("https://linkedin-back.azurewebsites.net/auth/otp/email/send/",{
     email:email,
     context:"register" 
    }).then((res) => {
      console.log(res);
      console.log(res.status);
    // localStorage.setItem("accesstoken" , res.data.tokens.access);
    })
      .catch((err) => {
        console.log(err);
      }
      );
        setSeconds(60);}
        else
        {
            //if timer not go brr
            console.log("wait");
        }
    }
    function handleapi(){
        setLoading(true);
        localStorage.setItem("otp",value);
        const email=localStorage.getItem("email");
        const context = localStorage.getItem("context");
        axios.post("https://linkedin-back.azurewebsites.net/auth/otp/email/verify/",{
            email:email,
            otp:value
        }).then((res) => {
            console.log(res.data);
            setLoading(false);
            if(res.status===200)
            {
                if(context==='register')
                Navhandler("/authphone");
                else
                Navhandler("/reset_password");
            }
            
          })
            .catch((err) => {
              console.log(err);
              setLoading(false); 
            }
            );
            // setLoading(false);
    }

    return <div>
    {loading?<Loader />:(<div>
    <Heading />  
    <img className="otpillustration"src={illustration} alt="" />
    <div>
    <div id = "otpbox">
        <p className="topline">Check For OTP</p>
        <p className="middle">Enter the OTP sent to your email address </p>
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
        <p className="lowline">Didn't get OTP?<span id ="resend" onClick={ResendApi}> Resend OTP </span> 0:{seconds}</p>
    
      <Authblock name="Verify" onclick={handleapi}/>
    </div>
    </div></div>)}
    </div>
}

export default Otp;
