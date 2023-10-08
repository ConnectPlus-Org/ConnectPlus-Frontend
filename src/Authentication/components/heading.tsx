import React from "react";
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
  