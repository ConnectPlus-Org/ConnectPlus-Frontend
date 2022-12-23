import React from "react";

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
        Continue with Google
      </button>
      <Instruction status={props.status} />
    </div>
  );
};

export default Oauth;
