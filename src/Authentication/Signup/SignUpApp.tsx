import React from "react"
import './signup.css' ;
import Oauth from '../components/loginbox';
import Input from '../components/authinput';
import Switch from '../components/authswitch';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
const illustration: string = require("../images/signup.svg").default;

const SignUp = () => {

    function handlepass() {
        console.log(1)
      }

    return <div>
    <Heading />  
    <img className="illustration"src={illustration} alt="" />
    <div>
    <img className="illustration" src={illustration} alt="Enter phone number" />
    <div id = "signup">
      <Oauth status="Sign up" />
      <Input onchange={handlepass} type="text" lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address'/>
      <Authblock name="Sign Up" />
      <Switch status="Already" action='Log In' />
    </div>
    </div>
    </div>
}

export default SignUp;
