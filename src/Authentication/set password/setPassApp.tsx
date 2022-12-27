import React from 'react';
import './setpass.css';
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
const illustration: string = require("../images/setpass.svg").default;



function passwordset(){
    return (
    <div>
       <Heading /> 
       <img className='svgsetpass' id='svg1' src={illustration} alt="" />
       <div id="setpass" >
       <div><h1>Set password?</h1>
            <p>No worries, set password</p></div>
            <Input  type="password" lable="Password" placeholder="Enter Password" message="Required Field" />
            <Input  type="password" lable="Confirm-Password" placeholder="Enter Password" message="Required Field" />
            <br />
            <Authblock  name="Save"/>
            <pre>Cancel</pre>
            
       </div>
       <img className='svgsetpass' id='svg2' src={illustration} alt="" />
    </div>
);}
export default passwordset;