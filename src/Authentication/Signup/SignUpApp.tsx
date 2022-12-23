import React from "react"
import '../login/login.css' ;
import Oauth from '../components/loginbox';
import Input from '../components/authinput';
import Switch from '../components/authswitch';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
const illustrationlogin : string = require("../images/loginImage.svg").default;

const SignUp = () => {

  function handlepass() {
    console.log(1);
  }

    return <div>
    <Heading />  
    <img className="illustration"src={illustrationlogin} alt="" />
    <div>
    <div id = "login">
      <Oauth status="Sign up" />
      <Input type="text" onchange={handlepass} lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address'/>
      <Authblock name="Sign Up" />
      <Switch status="Already" action='Log In' />
    </div>
    </div>
    </div>
}

export default SignUp;
