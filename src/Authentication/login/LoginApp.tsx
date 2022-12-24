import React from "react"
import '../login/login.css' ;
import Oauth from '../components/loginbox';
import Input from '../components/authinput';
import Switch from '../components/authswitch';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
const illustration: string = require("../images/loginImage.svg").default;
// import { useNavigate } from "react-router-dom";

const Login = () => {
    // const Navhandler = useNavigate()

    // const f =() => {
    //     Navhandler('/SignUp')
    // }
    function handlepass(e: any) {
      console.log(e.target.value)
    }

    return <div>
    <Heading />  
    <img className="illustration" src={illustration} alt="" />
    <div id = "login">
      <Oauth  status="Log in"/>
      <Input onchange={handlepass} type="text" lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address'/>
      <Input onchange={handlepass} type="password" lable='Password' placeholder='Enter Your Password' message='Must be at least 8 characters.'/>
      <a id="forgot_password">Forgot Password?</a>
      <Authblock name="Log In" />
      <Switch status="Don't" action='Sign Up' />
    </div>
    </div>
}

export default Login;
