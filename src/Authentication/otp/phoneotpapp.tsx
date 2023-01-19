import React, { useEffect, useState } from "react"
import './otp.css' ;
import Authblock from '../components/authblock';
import OtpField from 'react-otp-field';
import Heading from '../components/heading';
import Loader from "../../loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const illustration: string = require("../images/otp.svg").default;

const Phoneotp = () => {

    const Navhandler = useNavigate();
    const [seconds,setSeconds] =useState(60);
    const [value, setValue] = useState('');
    const [loading,setLoading]=useState(false);
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


    function ResendApi(){
        if(seconds===0){
    const number=localStorage.getItem("number");
    axios
      .post("https://linkedin-backend.azurewebsites.net/auth/otp/phone/send/", {
        phone_number: number,
      })
      .then((res) => {
        console.log(res.data.message);
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
        setSeconds(60);}
        else
        {
            //if timer not go brr
            console.log("wait");
        }
    }

    function handleapi(){
        setLoading(true);
        const number=localStorage.getItem("number");
        axios.post("https://linkedin-backend.azurewebsites.net/auth/otp/phone/verify/",{
            phone_number:number,
            otp:value
        }).then((res) => {
            setLoading(false);
            if(res.status===200)
            {
                Navhandler("/set_password");
            }
            
          })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            }
            );
           
    }

    return <div>
        {loading?<Loader />:(<div>
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
        <p className="lowline">Didn't get OTP?<span id ="resend" onClick={ResendApi}> Resend OTP </span> 0:{seconds}</p>
    
      <Authblock name="Verify" onclick={handleapi}/>
    </div>
    </div></div>)}
    </div>
}

export default Phoneotp;
