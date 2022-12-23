import React, { FC } from "react"
import './login.css' ;
import Oauth from '../components/loginbox';
import Input from '../components/authinput';
import Switch from '../components/authswitch';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
import Illustration from '../components/illustration'
import { useNavigate } from "react-router-dom";

const Login:FC = () => {

    return <div>
    <Heading />  
    <div>
    <Illustration type="login" />
    <div id = "login">
      <Oauth  status="Log in"/>
      <Input lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address'/>
      <Input lable='Password' placeholder='Enter Your Password' message='Must be at least 8 characters.'/>
      <a id="forgot_password">Forgot Password?</a>
      <Authblock name="Log In" />
      <Switch status="Don't" action='Sign Up' />
    </div>
    </div>
    </div>
}

export default Login;
