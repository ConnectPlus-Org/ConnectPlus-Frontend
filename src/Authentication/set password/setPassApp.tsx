import React, { useState } from 'react';
import './setpass.css';
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import axios from 'axios';
import Loader from "../../loader";
const illustration: string = require("../images/setpass.svg").default;



function Passwordset(){
    
    const [password,setpassword] =useState("");
    const [password2,setpassword2] =useState("");
    const email = localStorage.getItem("email");
    const [loading,setLoading]=useState(false);
    const otp = localStorage.getItem("otp")

    function handlepass(e:any){
        setpassword(e.target.value);
    }

    function handlepass2(e:any){
        setpassword2(e.target.value);
    }

    function handleapi(){
        setLoading(true);
        if(password===password2)
        {
            axios.post("https://linkedin-back.azurewebsites.net/auth/account/register/",{
            email:email,
            password:password,
            email_otp:otp
            }).then((res) => {
                console.log(res.data);
                setLoading(false);
              })
                .catch((err) => {
                  console.log(err);
                  setLoading(false);
                }
                );
            localStorage.clear();
        }
        else
        {console.log("passwords not matching");
        setLoading(false);}
    }

    return <div>
    {loading?<Loader />:
    <div>
       <Heading /> 
       <img className='svgsetpass' id='svg1' src={illustration} alt="" />
       <div id="setpass" >
       <div><h1 className='topline'>Set password?</h1>
            <p className='middle'>No worries, set password</p></div>
            <Input onchange={handlepass} type="password" lable="Password" placeholder="Enter Password" message="Required Field" />
            <Input onchange={handlepass2} type="password" lable="Confirm-Password" placeholder="Enter Password" message="Required Field" />
            <br />
            <Authblock onclick={handleapi} name="Save"/>
            <pre>Cancel</pre>
            
       </div>
       <img className='svgsetpass' id='svg2' src={illustration} alt="" />
    </div>}</div>
}
export default Passwordset;