import React from "react";

function otphelper(e:any){
    console.log(e.target.value);
}
function Otpbox() {  
    return (
        <div id="otpbox">
        <input onKeyUp={otphelper} className="otpelement" type="number" maxLength={1} max="9" min="0" />
        <input onKeyUp={otphelper} className="otpelement" type="number" maxLength={1} max="9" min="0" />
        <input onKeyUp={otphelper} className="otpelement" type="number" maxLength={1} max="9" min="0" />
        <input onKeyUp={otphelper} className="otpelement" type="number" maxLength={1} max="9" min="0" />
        <input onKeyUp={otphelper} className="otpelement" type="number" maxLength={1} max="9" min="0" />
        <input onKeyUp={otphelper} className="otpelement" type="number" maxLength={1} max="9" min="0"  />
        </div>
    );
}

export default Otpbox;
