import React, { useState } from "react";
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import './forgot.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
const illustration: string = require("../images/forgot.svg").default;

const Forgot = () => {
    const Navhandler = useNavigate()
    const [email, setemail] = useState("");

    function handlemail(e: any) {
        setemail(e.target.value);
      }

    function Handleapi() {
        axios.post("https://linkedin-back.azurewebsites.net/auth/otp/email/send/", {
      email :  email,
      context : "forget"
    }).then((res) => {
        console.log(res.data.message);
        console.log(res.status);
        if (res.status === 201)
      {
        Navhandler('/otp');
      }
      else {
        console.log('f')
      }
        localStorage.setItem("email" , email);
    })
    .catch((err) => {
        console.log(err);
        });
    }

    return <div>
        <Heading />
        <img id="forgotillustration1" src={illustration} alt="" />
        <div id = "forgot">
            <div><h1>Forgot password?</h1>
            <p>No worries, reset your password </p></div>
            <Input onchange={handlemail} type="text" lable="Email Address" placeholder="Enter Email" message="Required Email" />
            <Authblock onclick={Handleapi} name="Continue"/>
            <pre onClick={()=>Navhandler('/login')}> Back </pre>
        </div>
        <img id="forgotillustration2"src={illustration} alt="" />
    </div>
}

export default Forgot;