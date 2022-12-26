import React from "react";
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import '../login/login.css' ;
import "./signup.css"
const illustration: string = require("../images/signup.svg").default;

const Phone = () => {

    function handlepass() {
        console.log(1)
      }

    return<div>
        <Heading />
        <img className="illustration" id = "phoneillustration" src={illustration} alt="Enter phone number" />
        <div id="phone">
            <h1>Register your contact</h1>
            <Input onchange={handlepass} type="number" lable="Mobile Nunmber" placeholder="Enter Number" message="Enter a 10-digit valid number" />
            <div><button>Verify</button><span>Skip</span></div>
        </div>
    </div>
}

export default Phone;