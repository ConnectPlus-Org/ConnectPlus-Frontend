import React from "react";
const illustration: string = require("../images/google.svg").default;

type insprop = {
  status: string;
};

const Instruction = (props: insprop) => {
  return (
    <div id="auth_instruction">
      <pre className="line"></pre>
      <span>Or {props.status} with email</span>
      <pre className="line"></pre>
    </div>
  );
};

type oprop = {
  status: string;
};

const Oauth = (props : oprop ) => {
  return (
    <div id="loginbox">
      <p className="authbox">Welcome to ProFolio</p>
      <button id="oauth" className="authbox">
      <img id="googleicon" src={illustration} alt="google" />
        <span><b>Continue with Google</b></span>
      </button>
      <Instruction status={props.status} />
    </div>
  );
};

export default Oauth;
