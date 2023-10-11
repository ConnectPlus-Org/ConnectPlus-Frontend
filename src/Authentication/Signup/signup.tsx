import React, { useState } from "react";
import Input from "../components/authinput";
import Heading from "../components/heading";
import "../login/login.css";
import "./signup.css";
import Loader from '../../loader';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const illustration: string = require("../images/signup.svg").default;

const Phone = () => {
  const Navhandler = useNavigate();
  const [number, setnumber] = useState("");
  const [loading,setLoading]=useState(false);
  const email =localStorage.getItem("email")


  function handlenumber(e: any) {
    if(e.target.value>=1000000000 && e.target.value<10000000000){
      document.getElementById("num")!.style.visibility = "hidden"
      document.getElementById("numb")!.style.borderColor = "#66DF98";
      setnumber(e.target.value);
    }
    else
    {setnumber("")
    if(e.target.value==="")
    {document.getElementById("num")!.style.visibility = "hidden";
    document.getElementById("numb")!.style.borderColor = "white";}
    else
    {document.getElementById("num")!.style.visibility = "visible";
    document.getElementById("numb")!.style.borderColor = "#CF6679";}}
  }
  function handleskip(){
    Navhandler('/set_password');
  }
  function Handleapi() {
    if(number){setLoading(true);
    axios
      .post("https://linkedin-backend.azurewebsites.net/auth/otp/phone/send/", {
        phone_number: number,
      })
      .then((res) => {
        console.log(res.data.message);
        console.log(res.status);
        if (res.status === 200) {
          Navhandler("/phoneotp");
        } else {
          setLoading(false);
          console.log("f");
        }
        localStorage.setItem("number", number);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });}
  }

  return (<div>
    {(loading?<Loader/>:<div>
      <Heading />
      <img
        className="illustration"
        id="phoneillustration"
        src={illustration}
        alt="Enter phone number"
      />
      <div id="phone">
        <h1>Register your contact</h1>
        <Input
          onchange={handlenumber}
          type="number"
          lable="Mobile Number"
          placeholder="Enter Number"
          message="Enter a 10-digit valid number"
          err_id="num"
          inp="numb"
        />
        <div>
          <button onClick={Handleapi}>Verify</button>
          <span onClick={handleskip}>Skip</span>
        </div>
      </div>
    </div>)}
    </div>
  );
};

export default Phone;
