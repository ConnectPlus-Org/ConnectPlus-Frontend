import React, { useState } from "react"
import '../login/login.css' ;
import Oauth from '../components/loginbox';
import Input from '../components/authinput';
import Switch from '../components/authswitch';
import Authblock from '../components/authblock';
import Heading from '../components/heading';
import axios from 'axios';
import Loader from '../../loader';
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const illustration: string = require("../images/loginImage.svg").default;

function Login() {
  const Navhandler = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading,setLoading]=useState(false);
  const toaststyle ={
    color : "black"
  }

  function handlepass(e: any) {
    if((/^(?=.*[0-9])(?=.*[!@#$%^_=&*])[a-zA-Z0-9!@#$%_=^&*]{8,100}$/).test(e.target.value) || e.target.value==="")
    {
      setpassword(e.target.value);
      document.getElementById("pass")!.style.visibility = "hidden";
      if(e.target.value==="")
      {document.getElementById("passb")!.style.borderColor = "white";}
      else
      {document.getElementById("passb")!.style.borderColor = "#66DF98";}
    }
    else{
      document.getElementById("pass")!.style.visibility = "visible";
      document.getElementById("passb")!.style.borderColor = "#CF6679";
    }
  }
  function handlemail(e: any) {
    if((/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(e.target.value) || e.target.value==="")
    {
      setemail(e.target.value);
      document.getElementById("log")!.style.visibility = "hidden";
      if(e.target.value==="")
      document.getElementById("logb")!.style.borderColor = "white";
      else
      document.getElementById("logb")!.style.borderColor = "#66DF98";
    }
    else{
      document.getElementById("log")!.style.visibility = "visible";
      document.getElementById("logb")!.style.borderColor = "#CF6679";
    }
  }
  function handleapi() {
    if(email && password){setLoading(true);
    axios.post("https://linkedin-backend.azurewebsites.net/auth/account/login/", {
      email :  email ,
      password : password 
    }).then((res) => {
      console.log(res);
      localStorage.setItem("accesstoken" , res.data.tokens.access);
      var accesstoken = localStorage.getItem("accesstoken");
      const config ={
      headers:{
    Authorization:`Bearer ${accesstoken}`,
      }
}
      axios.get("https://linkedin-backend.azurewebsites.net/profile/userprofile/",config)
      .then((res) => {
          setLoading(false);
          sessionStorage.setItem("avatar",res.data.avatar) 
          sessionStorage.setItem("username",res.data.username) 
          sessionStorage.setItem("name",res.data.first_name + " " + res.data.last_name) 
          Navhandler('/home')
        })
        .catch((err) => {
          setLoading(false);
          if(err.response.status == 404)
          Navhandler('/profile');
          console.log(err);
        });
      
    })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if(err.response.status == 401)
        toast.error("Wrong Password")
        else
        toast.error('Enter a valid email address')
      }
      );}
      else
      toast.error("Enter All The Credentials")
  }
  return   <div>
  {(loading?<Loader/>:<div>
  <Heading />
  <img className="illustration" src={illustration} alt="" />
  <div id="login">
    <Oauth status="Log in" />
    <Input inp="logb" err_id="log" onchange={handlemail} type="text" lable='Email Address' placeholder='Enter Email' message='Enter Valid Email Address' />
    <Input inp="passb" onchange={handlepass} type="password" lable='Password' placeholder='Enter Your Password' message='Must be at least 8 characters with 1 special character,1 number,1 capital,1 small alphabet.' err_id="pass" />
    <p onClick={() => Navhandler('/forgot_password')} id="forgot_password">Forgot Password?</p>
    <Authblock onclick={handleapi} name="Log In" />
    <Switch status="Don't" action='Sign Up' destination={() => Navhandler('/signup')}  />
  </div>
  <ToastContainer position="top-center" theme="dark" />
</div>)}
</div>;

}

export default Login;
