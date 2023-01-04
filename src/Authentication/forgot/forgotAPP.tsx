import React, { useState, useEffect  } from "react";
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import './forgot.css'
import axios from 'axios';
import Loader from '../../loader';
import {useNavigate} from "react-router-dom";
const illustration: string = require("../images/forgot.svg").default;

const Forgot = () => {
    const Navhandler = useNavigate()
    const [email, setemail] = useState("");
    const [correctMail , setCorrectMail] = useState(false);
    const rightmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [loading,setLoading]=useState(false);
    const [errormsg,seterror] = useState("")

    useEffect(() => {
      seterror("Invalid Mail")
      setemail(email.trim());
      if (rightmail.test(email)) {
        document.getElementById("error")!.style.visibility = "hidden";
        console.log("true");
        setCorrectMail(true);
      } else if (email) {
        document.getElementById("error")!.style.visibility = "visible";
        setCorrectMail(false);
      }
    }, [email]);

    function handlemail(e: any) {
        setemail(e.target.value);
      }

    function Handleapi() {
      setLoading(true);
      if (correctMail){
        axios.post("https://linkedin-back.azurewebsites.net/auth/otp/email/send/", {
      email :  email,
      context : "forget"
    }).then((res) => {
        console.log(res.data.message);
        console.log(res.status);
        if (res.status === 201)
      {
        Navhandler('/otp');
      }
      else {
        console.log('f')
      }
        localStorage.setItem("email" , email);
        setLoading(false);
        
    })
    .catch((err) => {
      
        console.log(err);
        setLoading(false);
        });}
        else
        {setLoading(false);}
        
    }

    return <div>
         {loading?<Loader/>:(
          <div>
        <Heading />
        <img id="forgotillustration1" src={illustration} alt="" />
        <div id = "forgot">
            <div><h1>Forgot password?</h1>
            <p>No worries, reset your password </p></div>
            <Input onchange={handlemail} type="text" lable="Email Address" placeholder="Enter Email" message={errormsg} />
            <br />
            <Authblock onclick={Handleapi} name="Continue"/>
            <pre onClick={()=>Navhandler('/login')}> Back </pre>
        </div>
        <img id="forgotillustration2"src={illustration} alt="" /></div>)}
    </div>
}

export default Forgot;