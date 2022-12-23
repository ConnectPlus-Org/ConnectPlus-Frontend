import React, { FC } from "react"
import '../index.css';
import '../CSS/login.css' ;
import Oauth from './loginbox';
import Input from './authinput';
import Switch from './authswitch';
import Authblock from './authblock';
import Heading from './heading';
import Illustration from './illustration'
import { useNavigate } from "react-router-dom";

const Login:FC = () => {
    const Navhandler = useNavigate()

    const f =() => {
        Navhandler('/SignUp')
    }

    return <div>
    <Heading />  
    <Illustration type="login" />
    <div id = "login">
      <Oauth />
      <Input lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address'/>
      <Input lable='Password' placeholder='Enter Your Password' message='Must be at least 8 characters.'/>
      <a id="forgot_password">Forgot Password?</a>
      <Authblock name="Log In" />
      {/* <Switch status="Don't" action='Sign Up' handleToNavigate={f}> */}
    </div>
    </div>
}

export default Login;
