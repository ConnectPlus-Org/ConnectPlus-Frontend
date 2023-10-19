import React, { useState } from "react";
import Nav from "../../navbar/navbar";
import "./edit_profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Heading from "../../Authentication/components/heading";
import BaseUrl from "../../BaseUrl";
const arr: string = require("../Main/images/arrow.svg").default;
const edit: string = require("./edit.svg").default;
const Editprofile = () => {
  const Navhandler = useNavigate();
  const activestyle = {
    color: "#A950FB",
    borderLeft: "3px solid #A950FB",
  };

  var accesstoken = localStorage.getItem("accesstoken");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  var [fname, setfname] = useState("");
  var [lname, setlname] = useState("");
  var [city, setcity] = useState("");
  var [country, setcountry] = useState("");
  var [avatar, setavatar] = useState("");
  var [heading, setheading] = useState("");

  function getdetails() {
    BaseUrl.get("profile/userprofile/", config)
      .then((res) => {
        setfname(res.data.first_name);
        setlname(res.data.last_name);
        setcity(res.data.city);
        setcountry(res.data.country);
        setavatar(res.data.avatar);
        localStorage.setItem("avatar", res.data.avatar);
        setheading(res.data.headline);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getdetails();

  const inputavatar = () => {
    document.getElementById("editava")?.click();
  };

  const [fileData, setFileData] = useState("");

  function handleavatar(e: any) {
    setFileData(e.target.files[0]);
    setavatar(fileData);
  }

  function handleApi() {
    const object = new FormData();
    console.log(fname, lname, city, country, heading, fileData);
    object.append("first_name", fname);
    object.append("last_name", lname);
    object.append("country", country);
    object.append("city", city);
    object.append("headline", heading);
    object.append("avatar", fileData);
    BaseUrl.patch("/profile/userprofile/", object, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <Nav />
      <div id='account_nav'>
        <p style={activestyle}>Edit profile</p>
        <p
          onClick={() => {
            Navhandler("/account/skills");
          }}
        >
          Skill Section
        </p>
        <p
          onClick={() => {
            Navhandler("/account/experience");
          }}
        >
          Experience
        </p>
        <p
          onClick={() => {
            Navhandler("/account/aboutme");
          }}
        >
          About Me
        </p>
        <p
          onClick={() => {
            Navhandler("/account/education");
          }}
        >
          Education
        </p>
        <p
          onClick={() => {
            Navhandler("/account/additional");
          }}
        >
          Additional
        </p>
      </div>
      <div id='edit_profile'>
        <p className='mobtext'>
          <img
            className='backarr'
            src={arr}
            onClick={() => Navhandler("/mobnav")}
          />
          Update Profile
        </p>
        <div style={{ display: "inline" }}>
          <img alt='' src={avatar} />
          <input
            type='file'
            id='editava'
            style={{ display: "none" }}
            onChange={handleavatar}
          />
          <b onClick={inputavatar}>
            <img src={edit} alt='edit' id='edit_icon' />
            Change profile photo
          </b>
        </div>
        <div className='input_wrapper'>
          First Name
          <br />
          <input
            className='edit_input profileinput'
            placeholder='First Name'
            defaultValue={fname}
            onChange={(e: any) => (fname = e.target.value)}
          />
        </div>
        <div className='input_wrapper'>
          Last Name
          <br />
          <input
            className='edit_input profileinput'
            placeholder='Last Name'
            defaultValue={lname}
            onChange={(e: any) => (lname = e.target.value)}
          />
        </div>
        <div className='input_wrapper'>
          Country/Region
          <br />
          <input
            className='edit_input profileinput'
            placeholder='Country/Region'
            defaultValue={country}
            onChange={(e: any) => (country = e.target.value)}
          />
        </div>
        <div className='input_wrapper'>
          City/District
          <br />
          <input
            className='edit_input profileinput'
            placeholder='City/District'
            defaultValue={city}
            onChange={(e: any) => (city = e.target.value)}
          />
        </div>
        <div className='input_wrapper'>
          Headline
          <br />
          <textarea
            id='headline'
            placeholder='Heading'
            defaultValue={heading}
            onChange={(e: any) => (heading = e.target.value)}
          />
        </div>
        <button onClick={handleApi}>Save</button>
      </div>
    </div>
  );
};

export default Editprofile;
