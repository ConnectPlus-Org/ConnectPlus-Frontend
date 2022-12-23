import React, { FC } from "react"
import '../index.css';
import '../CSS/login.css' ;
import Oauth from './loginbox';
import Input from './authinput';
import Switch from './authswitch';
import Authblock from './authblock';
import Heading from './heading';
const illustration: string = require("../images/loginImage.svg").default;
// import { useNavigate } from "react-router-dom";

const Login = () => {
    // const Navhandler = useNavigate()

    // const f =() => {
    //     Navhandler('/SignUp')
    // }

    return <div>
    <Heading />  
    {/* <Illustration type="login" /> */}
    
    <img className="illustration" src={illustration} alt="" />
    <div id = "login">
      <Oauth />
      <Input lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address'/>
      <Input lable='Password' placeholder='Enter Your Password' message='Must be at least 8 characters.'/>
      <a id="forgot_password">Forgot Password?</a>
      <Authblock name="Log In" />
      {/* <Switch status="Don't" action='Sign Up' > */}
    </div>
    </div>
}

export default Login;
