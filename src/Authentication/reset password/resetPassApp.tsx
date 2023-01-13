import React, { useState } from 'react';
import './resetpass.css';
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import axios from 'axios';
import Loader from "../../loader";
const illustration: string = require("../images/setpass.svg").default;



function Passwordset(){

    const [password,setpassword] =useState("");
    const [password2,setpassword2] =useState("");
    const [loading,setLoading]=useState(false);
    const email = localStorage.getItem("email");
    const otp = localStorage.getItem("otp")

    function handlepass(e:any){
        setpassword(e.target.value);
        if((/^(?=.*[0-9])(?=.*[!@#$%^_=&*])[a-zA-Z0-9!@#$%_=^&*]{8,100}$/).test(e.target.value) || e.target.value==="")
        {
            document.getElementById("pass")!.style.visibility = "hidden";
        }
        else{
            document.getElementById("pass")!.style.visibility = "visible";
        }
    }

    function handlepass2(e:any){
        setpassword2(e.target.value);
        if(password!=password2)
        {
            document.getElementById("pass2")!.style.visibility = "visible";
        }
        else{
            document.getElementById("pass2")!.style.visibility = "hidden";
        }
    }

    function handleapi(){
        setLoading(true);
        if(password===password2)
        {
            axios.put("https://linkedin-back.azurewebsites.net/auth/password/forget/",{
            email:email,
            new_password:password,
            otp:otp
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
        {loading?<Loader />:<div>
       <Heading /> 
       <img className='svgsetpass' id='svg1' src={illustration} alt="" />
       <div id="setpass" >
       <div><h1 className='topline'>Reset password?</h1>
            <p className='middle'>No worries, reset password anytime</p></div>
            <Input   onchange={handlepass} type="password" lable="Password" placeholder="Enter Password" message="Must be at least 8 characters with 1 special character,1 number,1 capital,1 small alphabet" err_id='pass' />
            <Input  onchange={handlepass2} type="password" lable="Confirm-Password" placeholder="Enter Password" message="Passwords Must Match" err_id='pass2'/>
            <br />
            <Authblock onclick={handleapi} name="Save"/>
            <pre>Cancel</pre>
            
       </div>
       <img className='svgsetpass' id='svg2' src={illustration} alt="" />
    </div>}
    </div>
}
export default Passwordset;