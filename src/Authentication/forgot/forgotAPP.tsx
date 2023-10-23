import React, { useState, useEffect } from "react";
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import './forgot.css';
import axios from 'axios';
import Loader from '../../loader';
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../BaseUrl";

const illustration: string = require("../images/forgot.svg").default;

const Forgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    setEmail(email.trim());
  }, [email]);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue) || emailValue === "") {
      document.getElementById("emailerr")!.style.visibility = "hidden";
      document.getElementById("emailb")!.style.borderColor = emailValue === "" ? "white" : "#66DF98";
      setIsEmailValid(true);
    } else {
      document.getElementById("emailerr")!.style.visibility = "visible";
      document.getElementById("emailb")!.style.borderColor = "#CF6679";
      setIsEmailValid(false);
    }
  }

  function handleApiCall() {
    setLoading(true);
    if (isEmailValid) {
      BaseUrl.post("/auth/otp/email/send/", {
        email: email,
        context: "forget"
      }).then((res) => {
        console.log(res.data.message);
        console.log(res.status);
        if (res.status === 201) {
          navigate('/otp');
        } else {
          console.log('API call failed');
        }
        localStorage.setItem("email", email);
        localStorage.setItem("context", "forget");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? <Loader /> : (
        <div>
          <Heading />
          <img id="forgotillustration1" src={illustration} alt="" />
          <div id="forgot">
            <div>
              <h1>Forgot password?</h1>
              <p>No worries, reset your password</p>
            </div>
            <Input
              onchange={handleEmailChange}
              type="email"
              lable="Email Address"
              placeholder="Enter Email"
              message="Enter Valid Email Address"
              err_id="emailerr"
              inp="emailb"
            />
            <br />
            <Authblock onclick={handleApiCall} name="Continue" />
            <pre onClick={() => navigate('/login')}> Back </pre>
          </div>
          <img id="forgotillustration2" src={illustration} alt="" />
        </div>
      )}
    </div>
  );
};

export default Forgot;
