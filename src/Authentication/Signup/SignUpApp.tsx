import React, { useState } from "react";
import "./signup.css";
import Oauth from "../components/loginbox";
import Input from "../components/authinput";
import Switch from "../components/authswitch";
import Authblock from "../components/authblock";
import Heading from "../components/heading";
import axios from "axios";
import Loader from "../../loader";
import { useNavigate } from "react-router-dom";
const illustration: string = require("../images/signup.svg").default;

const SignUp = () => {
  const Navhandler = useNavigate();
  const [loading, setLoading] = useState(false);

  const [email, setemail] = useState("");
  function handlemail(e: any) {
    setemail(e.target.value);
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(e.target.value) || e.target.value === "") {
      document.getElementById("sign")!.style.visibility = "hidden";
      if(e.target.value==="")
      document.getElementById("signb")!.style.borderColor = "white";
      else
      document.getElementById("signb")!.style.borderColor = "#66DF98";
    } 
    else {
      document.getElementById("sign")!.style.visibility = "visible";
    }
  }

  function handleapi() {
    setLoading(true);
    localStorage.setItem("email", email);
    localStorage.setItem("context", "register");
    axios
      .post("https://linkedin-back.azurewebsites.net/auth/otp/email/send/", {
        email: email,
        context: "register",
      })
      .then((res) => {
        console.log(res);
        console.log(res.status);
        if (res.status === 201) {
          Navhandler("/otp");
        } else {
          console.log("f");
        }
        // localStorage.setItem("accesstoken" , res.data.tokens.access);
      })
      .catch((err) => {
        setLoading(false);
        // alert(err.response.data.email)
        console.log(err);
      });
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Heading />
          <img className="illustration" src={illustration} alt="" />
          <div id="signup">
            <Oauth status="Sign up" />
            <Input
              onchange={handlemail}
              type="text"
              lable="Email Address"
              placeholder="Enter Email"
              message="Enter Valid Email Address"
              err_id="sign"
              inp="signb"
            />
            <Authblock onclick={handleapi} name="Sign Up" />
            <Switch
              status="Already"
              action="Log In"
              destination={() => Navhandler("/login")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
