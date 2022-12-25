import React ,{useState} from "react"
import './signup.css' ;
import Oauth from '../components/loginbox';
import Input from '../components/authinput';
import Switch from '../components/authswitch';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
import axios from "axios";
const illustration: string = require("../images/signup.svg").default;

const SignUp = () => {
  
  const [email,setemail] = useState("");  
  function handlemail(e:any) {
        setemail(e.target.value);
      }

  function handleapi(){
    axios.post("https://linkedin-back.azurewebsites.net/auth/otp/email/send/",{
     email:email,
     context:"register" 
    }).then((res) => {
      console.log(res.data);
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
    <div>
    <img className="illustration" src={illustration} alt="Enter phone number" />
    <div id = "signup">
      <Oauth status="Sign up" />
      <Input onchange={handlemail} type="text" lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address'/>
      <Authblock onclick={handleapi}name="Sign Up" />
      <Switch status="Already" action='Log In' />
    </div>
    </div>
    </div>
}

export default SignUp;
