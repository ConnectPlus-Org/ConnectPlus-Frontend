import React from "react";
import './main.css'
import { useNavigate } from "react-router-dom";
const arrow:string = require('./images/arrow.svg').default

const MobNav = () => {
    const Navhandler = useNavigate();
    return <div id="mobNav">
        <p> Edit Profile <img src={arrow} onClick={()=>Navhandler('/account/edit_profile')}/> </p>
        <p> Skill Section <img src={arrow} onClick={()=>Navhandler('/account/skills')}/> </p>
        <p> Experience <img src={arrow} onClick={()=>Navhandler('/account/experience')}/> </p>
        <p> About Me <img src={arrow} onClick={()=>Navhandler('/account/aboutme')}/> </p>
        <p> Education <img src={arrow} onClick={()=>Navhandler('/account/education')}/> </p>
        <p> Additional <img src={arrow} onClick={()=>Navhandler('/account/additional')}/> </p>
    </div>
}

export default MobNav;
