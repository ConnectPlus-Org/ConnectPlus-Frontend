import React from "react";


function Otpbox() {  
    return (
        <div id="otpbox">
        <input className="otpelement" type="number" maxLength={1} max="9" min="0" />
        <input className="otpelement" type="number" maxLength={1} max="9" min="0" />
        <input className="otpelement" type="number" maxLength={1} max="9" min="0" />
        <input className="otpelement" type="number" maxLength={1} max="9" min="0" />
        <input className="otpelement" type="number" maxLength={1} max="9" min="0" />
        <input className="otpelement" type="number" maxLength={1} max="9" min="0"  />
        </div>
    );
}
  
export default Otpbox;
  