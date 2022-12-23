import React from "react"
import '../login/login.css' ;
import Oauth from '../components/loginbox';
import Input from '../components/authinput';
import Switch from '../components/authswitch';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
import Illustration from "../components/illustration";
const illustration: string = require("../images/google.svg").default;
// import { useNavigate } from "react-router-dom";

const Login = () => {
    // const Navhandler = useNavigate()

    // const f =() => {
    //     Navhandler('/SignUp')
    // }

    return <div>
    <Heading />  
    <Illustration type="login" />
    
    <img className="illustration" src={illustration} alt="" />
    <div id = "login">
      <Oauth  status="Log in"/>
      <Input type="text" lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address'/>
      <Input type="password" lable='Password' placeholder='Enter Your Password' message='Must be at least 8 characters.'/>
      <a id="forgot_password">Forgot Password?</a>
      <Authblock name="Log In" />
      <Switch status="Don't" action='Sign Up' />
    </div>
    </div>
}

export default Login;
