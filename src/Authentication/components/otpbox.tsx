import React from "react";

// const Handleevent = (event:any) => {
//     console.log()
//   var $allInputs = $(".otpelement");
//   var $this = $(event.target);
//   var index = $allInputs.index($this);
//   console.log(index);
//   if (index < $allInputs.length - 1) {
//     event.preventDefault();
//     $allInputs[index + 1].focus();
//   }
// };

function Otpbox() {
  return (
    <div id="otpbox">
      <input className="otpelement" type="number" max="9" min="0" />
      <input className="otpelement" type="number" max="9" min="0" />
      <input className="otpelement" type="number" max="9" min="0" />
      <input className="otpelement" type="number" max="9" min="0" />
      <input className="otpelement" type="number" max="9" min="0" />
      <input className="otpelement" type="number" max="9" min="0" />
    </div>
  );
}

export default Otpbox;
