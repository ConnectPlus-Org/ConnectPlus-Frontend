import React, { FC } from "react"
import '../login/login.css' ;
import Oauth from '../components/loginbox';
import Input from '../components/authinput';
import Switch from '../components/authswitch';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
import Illustration from '../components/illustration'

const SignUp:FC = () => {

    return <div>
    <Heading />  
    <div>
    <Illustration type="login" />
    <div id = "login">
      <Oauth status="Sign up" />
      <Input lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address'/>
      <Authblock name="Sign Up" />
      <Switch status="Already" action='Log In' />
    </div>
    </div>
    </div>
}

export default SignUp;
