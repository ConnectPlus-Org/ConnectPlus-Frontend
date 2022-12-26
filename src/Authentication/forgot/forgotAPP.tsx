import React from "react";
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import './forgot.css'
const illustration: string = require("../images/otp.svg").default;

const Forgot = () => {
    return <div>
        <Heading />
        <img id="forgotillustration1" src={illustration} alt="" />
        <div id = "forgot">
            <div><h1>Forgot password?</h1>
            <p>No worries, reset your password </p></div>
            <Input type="text" lable="Email Address" placeholder="Enter Email" message="Required Email" />
            <Authblock name="Continue"/>
            <pre>Back</pre>
        </div>
        {/* <img id="forgotillustration2"src={illustration} alt="" /> */}
    </div>
}

export default Forgot;