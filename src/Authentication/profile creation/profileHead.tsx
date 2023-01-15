import React, { useState } from 'react';
import './profile.css';
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import Loader from "../../loader";
const illustration: string = require("../images/profile.svg").default;
const edit:string = require("../images/edit.svg").default;

function ProfileHead(){
    
   const boxstyle = {
       height: '35vw'
   }
    const [loading]=useState(false);

    return <div>
    {loading?<Loader />:
    <div>
       <Heading /> 
       <img className='profileillustration' src={illustration} alt="illustration" />
       <div className='centrebox' style={boxstyle}>
        <p className='bigboi'>Make a Professional Profile</p>
        <div id="ava"><img id="avatar" alt="" /><img id="editavatar" src={edit} alt="" /></div>
        <div>
          Headline
          <br />
          <textarea id="prof_head" placeholder="Heading"/>
        </div>
        <Authblock name='Next'/>
       </div>
    </div>}</div>
}
export default ProfileHead;