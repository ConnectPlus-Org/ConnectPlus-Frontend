import React, { FC } from "react";

type insprop = {
  status: string;
};

const Instruction = (props: insprop) => {
  return (
    <div id="auth_instruction">
      <pre className="line"></pre>Or {props.status} with email  
      <pre className="line"></pre>
    </div>
  );
};

const Oauth: FC = () => {
  return (
    <div id="loginbox">
      <p className="authbox">Welcome to ProFolio</p>
      <div id="oauth" className="authbox">
        Continue with Google
      </div>
      <Instruction status="Log In" />
    </div>
  );
};

export default Oauth;
