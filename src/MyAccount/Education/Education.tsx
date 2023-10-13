import React, { useState } from "react";
import Nav from "../../navbar/navbar";
import "../edit_profile/edit_profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Boxcomponent from "./boxcomponent";
import BaseUrl from "../../BaseUrl";

const Education = () => {
  const activestyle = {
    color: "#A950FB",
    borderLeft: "3px solid #A950FB",
  };

  window.onclick = () => {
    const i: any = document.getElementById("i");
    const dropElementStyle =
      document.getElementById("drop") && document.getElementById("drop")!.style;
    if (dropElementStyle) {
      if (i === document.activeElement) dropElementStyle.visibility = "visible";
      else dropElementStyle.visibility = "hidden";
    }
  };

  const [searchres, setsearchres] = useState([]);
  const arr: string = require("../Main/images/arrow.svg").default;
  const [school, setschool] = useState("");
  const [degree, setdegree] = useState("");
  const [fos, setfos] = useState(1);
  const [grade, setgrade] = useState("");
  const [description, setdescription] = useState("");
  const curryear = new Date().getFullYear();
  const currmonth = new Date().getMonth();
  const [startmonth, setstartmonth] = useState(currmonth);
  const [startyear, setstartyear] = useState(curryear);
  const [endmonth, setendmonth] = useState(currmonth);
  const [endyear, setendyear] = useState(curryear);

  const years = Array.from(new Array(20), (val, index) => curryear - index);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septempber",
    "October",
    "November",
    "December",
  ];
  var accesstoken = localStorage.getItem("accesstoken");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };

  function handleschoolname(e: any) {
    setschool(e.target.value);
    BaseUrl.get(
      `/profile/organization/?search_input=school ${e.target.value}`,
      config
    )
      .then((res) => {
        console.log(res);
        setsearchres(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleapi() {
    const startmonth1 = startmonth + 1;
    const endmonth1 = endmonth + 1;

    const startdatestring = "" + startyear + "-" + startmonth1 + "-01";
    const enddatestring = "" + endyear + "-" + endmonth1 + "-01";
    console.log(startdatestring);
    console.log(enddatestring);
    let req;
    req = {
      school: school,
      degree: degree,
      field_of_study: fos,
      start_date: startdatestring,
      end_date: enddatestring,
      grade: grade,
      description: description,
    };

    const schoolid = parseInt(localStorage.getItem("schoolid")!, 10);
    if (school && localStorage.getItem("schoolame") === school) {
      req = { ...req, school: schoolid };
    } else {
      req = { ...req, school: school };
    }
    BaseUrl.post("/profile/education/", req, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const Navhandler = useNavigate();
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
        <p style={activestyle}>Education</p>
        <p
          onClick={() => {
            Navhandler("/account/additional");
          }}
        >
          Additional
        </p>
      </div>
      <div id='edit_profile' style={{ height: "125vh" }}>
        <p className='accountnavtopline'>
          <img
            className='backarr'
            src={arr}
            onClick={() => Navhandler("/mobnav")}
          />
          Education
        </p>
        <div>
          School
          <br />
          <input
            id='i'
            onChange={handleschoolname}
            value={school}
            className='edit_input profileinput'
            placeholder='School'
          />
          <div
            id='drop'
            className='dropsearchbox'
            onClick={() => {
              setsearchres([]);
              const schoolname: string = localStorage.getItem("schoolname")!;
              setschool(schoolname);
            }}
          >
            {searchres.map((box: any) => {
              return <Boxcomponent key={box.id} box={box} />;
            })}
          </div>
        </div>
        <div>
          Degree
          <br />
          <input
            onChange={(e: any) => {
              setdegree(e.target.value);
            }}
            className='edit_input profileinput'
            placeholder='Degree'
          />
        </div>
        <div>
          Field of Study
          <br />
          <input
            onChange={(e: any) => {
              setfos(e.target.value);
            }}
            className='edit_input profileinput dropdown'
            placeholder='Field of Study'
          />
        </div>
        <div>
          Grade
          <br />
          <input
            type='number'
            onChange={(e: any) => {
              setgrade(e.target.value);
            }}
            className='edit_input profileinput'
            placeholder='Grade'
          />
        </div>
        <div>
          Start Date
          <br />
          <select
            className='halfbox'
            onChange={(e: any) => {
              setstartmonth(e.target.value);
            }}
            name='month'
            id='month'
          >
            {months.map((month, index) => {
              return (
                <option key={`month${index}`} value={index}>
                  {month}
                </option>
              );
            })}
          </select>
          <select
            style={{ marginLeft: "3.8vw" }}
            className='halfbox'
            onChange={(e: any) => {
              setstartyear(e.target.value);
            }}
            name='month'
            id='month'
          >
            {years.map((year, index) => {
              return (
                <option key={`year${index}`} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          End Date
          <br />
          <select
            className='halfbox'
            onChange={(e: any) => {
              setendmonth(e.target.value);
            }}
            name='month'
            id='month'
          >
            {months.map((month, index) => {
              return (
                <option key={`month${index}`} value={index}>
                  {month}
                </option>
              );
            })}
          </select>
          <select
            style={{ marginLeft: "3.8vw" }}
            className='halfbox'
            onChange={(e: any) => {
              setendyear(e.target.value);
            }}
            name='month'
            id='month'
          >
            {years.map((year, index) => {
              return (
                <option key={`year${index}`} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          Description
          <br />
          <textarea
            onChange={(e: any) => {
              setdescription(e.target.value);
            }}
            value={description}
            id='desc'
            className='edit_input profileinput'
            placeholder='Description'
          />
        </div>

        <button onClick={handleapi}>Save</button>
      </div>
    </div>
  );
};

export default Education;
