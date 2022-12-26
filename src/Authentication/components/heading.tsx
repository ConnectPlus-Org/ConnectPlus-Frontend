import React from "react";
// import './App.css';
// import logo from "../images/Profoliologo.svg";
// const logo = require("../images/Profoliologo.svg") as string;
const logo: string = require("../images/Profoliologo.svg").default;

function Heading() {  
    return (
      <header>
        <img src={logo} alt="logo" />
      ConnectPlus
      </header>
    );
}
  
export default Heading;
  