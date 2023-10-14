import axios from "axios";
import { toNamespacedPath } from "node:path/win32";
import { config } from "process";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../../navbar/navbar";
import Skillcomponent from "./searchbox";
import "./skill.css";
import { ToastContainer, toast } from "react-toastify";
import BaseUrl from "../../BaseUrl";
const arr: string = require("../Main/images/arrow.svg").default;

const Skill = () => {
  if (window) {
    window.onclick = () => {
      const i = document.getElementById("i");
      const dropElementStyle = document.getElementById("drop")!.style;
      if (dropElementStyle) {
        if (i === document.activeElement)
          dropElementStyle.visibility = "visible";
        else dropElementStyle.visibility = "hidden";
      }
    };
  }
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

  var [searches, setsearches] = useState([]);
  var [skill, setskill] = useState("");

  var l: number = searches.length;
  function handleskill(e: any) {
    setskill(e.target.value);
    BaseUrl.get("/profile/skill/list/?search_input=" + e.target.value, config)
      .then((res) => {
        console.log(res.data);
        setsearches(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function addskill() {
    BaseUrl.post(
      "/profile/skill/",
      {
        skill_name: skill,
      },
      config
    )
      .then((res) => {
        console.log(res);
        toast("Skill added successfully");
      })
      .catch((err) => {
        toast("Skill already added");
        console.log(err);
      });
  }

  return (
    <div>
      <Nav />
      <div id='account_nav'>
        <p
          onClick={() => {
            Navhandler("/account/edit_profile");
          }}
        >
          Edit profile
        </p>
        <p style={activestyle}>Skill Section</p>
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
      <div id='skill'>
        <p>
          <img
            className='backarr'
            src={arr}
            onClick={() => Navhandler("/mobnav")}
          />
          Skill Section
        </p>
        <div>
          Skill
          <br />
          <input
            id='i'
            placeholder='Enter Skill'
            onChange={handleskill}
            value={skill}
          />
          <div style={{ height: "15vw" }}>
            <div
              id='drop'
              className='dropsearchbox'
              onClick={() => {
                setsearches([]);
                const skillname: string = localStorage.getItem("skillname")!;
                setskill(skillname);
              }}
            >
              {searches.map((box: any) => {
                return <Skillcomponent key={box.id} box={box} />;
              })}
            </div>
          </div>
        </div>
        <button onClick={addskill}>Save</button>
      </div>
      <ToastContainer position='top-center' theme='dark' />
    </div>
  );
};

export default Skill;
