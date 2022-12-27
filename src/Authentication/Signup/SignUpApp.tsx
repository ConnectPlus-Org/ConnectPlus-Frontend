import React ,{FC, useState} from "react"
import './signup.css' ;
import Oauth from '../components/loginbox';
import Input from '../components/authinput';
import Switch from '../components/authswitch';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const illustration: string = require("../images/signup.svg").default;

const SignUp = () => {
const Navhandler = useNavigate()

  const [email,setemail] = useState("");  
  function handlemail(e:any) {
        setemail(e.target.value);
      }

  function handleapi(){
    localStorage.setItem("email",email);
    localStorage.setItem("context",'register');
    axios.post("https://linkedin-back.azurewebsites.net/auth/otp/email/send/",{
     email:email,
     context:"register" 
    }).then((res) => {
      console.log(res);
      console.log(res.status);
      if (res.status === 201)
      {
        Navhandler('/otp');
      }
      else {
        console.log('f')
      }
      // localStorage.setItem("accesstoken" , res.data.tokens.access);
    })
      .catch((err) => {
        console.log(err);
      }
      );
  }

    return <div>
    <Heading />  
    <img className="illustration"src={illustration} alt="" />
    <div id = "signup">
      <Oauth status="Sign up" />
      <Input onchange={handlemail} type="text" lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address'/>
      <Authblock onclick={handleapi} name="Sign Up" />
      <Switch status="Already" action='Log In' destination={() => Navhandler('/login')} />
    </div>
    </div>
}

export default SignUp;
