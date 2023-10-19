import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../../navbar/navbar";
import "./main.css";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../loader";
import ExperienceBox from "./components/experience";
import EducationBox from "./components/educationbox";
import TestBox from "./components/test";
import CourseBox from "./components/course";
import BaseUrl from "../../BaseUrl";
import { toast, ToastContainer } from "react-toastify";
const edit: string = require("./images/edit.svg").default;
const plus: string = require("./images/plus.svg").default;
const arr: string = require("./images/arrow.svg").default;

const username = localStorage.getItem("username") || "";
var accesstoken = localStorage.getItem("accesstoken");
const config = {
  headers: {
    Authorization: `Bearer ${accesstoken}`,
  },
};

const Account = () => {
  const search = useLocation().search;
  let viewusername = new URLSearchParams(search).get("username");
  if (viewusername === null) viewusername = username;

  const [loading, setLoading] = useState(false);
  const [headline, setheadline] = useState("");
  const [follower, setfollower] = useState(0);
  const [connection, setconnect] = useState(0);
  const [about, setabout] = useState("");
  const [experiences, setexp] = useState([]);
  const [education, setedu] = useState([]);
  const [skills, setskill] = useState([]);
  const [test, settest] = useState([]);
  const [course, setcourse] = useState([]);
  const [avatar, setavatar] = useState("");
  const [name, setname] = useState("");
  const [cover, setcover] = useState("");

  useEffect(() => {
    BaseUrl.get("profile/mainpage/?username=" + viewusername, config)
      .then((res) => {
        console.log(res.data);
        setheadline(res.data.profile.headline);
        setfollower(res.data.followers_count);
        setconnect(res.data.connections_count);
        setabout(res.data.about);
        setexp(res.data.experience_data);
        setedu(res.data.education_data);
        setskill(res.data.skill_data);
        settest(res.data.testscore_data);
        setcourse(res.data.course_data);
        setavatar(res.data.profile.avatar);
        setcover(res.data.background_image);
        setname(res.data.profile.first_name + " " + res.data.profile.last_name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Navhandler = useNavigate();

  if (username != viewusername) {
    var cols = document.getElementsByClassName(
      "action"
    ) as HTMLCollectionOf<HTMLElement>;
    for (var i = 0; i < cols.length; i++) {
      cols[i].style.visibility = "hidden";
    }
  }

  function sendFollow() {
    BaseUrl.post("/network/following/", { username: viewusername }, config)
      .then((res) => {
        console.log(res);
        toast.info("you started following this account!!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("You are already following this account!!");
      });
  }

  function sendConnection() {
    BaseUrl.post(
      "/network/connection/request/send/",
      { reciever: viewusername },
      config
    )
      .then((res) => {
        console.log(res);
        toast.info("Connection Request sent successfully!!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Request already sent to this account!!");
      });
  }
  const inputPhoto = () => {
    document.getElementById("inpPhoto")?.click();
  };

  function showPreview(e: any) {
    var src = URL.createObjectURL(e.target.files[0]);
    let preview: any = document.getElementById("cover_image");
    preview!.src = src;
    const object = new FormData();
    object.append("background_image", e.target.files[0]);
    BaseUrl.patch("profile/mainpage/?username=" + viewusername, object, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(cover);
  }

  return (
    <div>
      <Nav />
      <div id='acc'>
        <div id='account_details'>
          <img id='cover_image' src={cover} />
          <input
            style={{ display: "none" }}
            type='file'
            id='inpPhoto'
            accept='image/*'
            onChange={showPreview}
          ></input>
          <img
            style={{ cursor: "pointer" }}
            onClick={inputPhoto}
            src={edit}
            id='editCover'
          />
          <div>
            <img id='account_avatar' alt='avatar' src={avatar} />
            <div
              className='action'
              id='Updateprofile'
              onClick={() => Navhandler("edit_profile")}
            >
              <img src={edit} />
              <p>Update profile</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "70vw",
              fontWeight: "700",
              margin: "1.5vw 0vw",
            }}
          >
            <p style={{ fontSize: "2.5vw" }}>{name}</p>
            <p style={{ fontSize: "1.6vw", alignSelf: "center" }}>
              {follower} followers
            </p>
            <p style={{ fontSize: "1.6vw", alignSelf: "center" }}>
              {connection} connections
            </p>
            {username != viewusername ? (
              <span onClick={() => sendFollow()} className='request'>
                + Follow
              </span>
            ) : null}
            {username != viewusername ? (
              <span onClick={() => sendConnection()} className='request'>
                Connect
              </span>
            ) : null}
          </div>
          <p style={{ fontSize: "1.4vw", marginLeft: "2vw" }}>{headline}</p>
        </div>
        <div className='acc_box'>
          <span>About Me</span>
          <div className='acc_icon action'>
            <img
              style={{ marginLeft: "5vw" }}
              src={edit}
              onClick={() => {
                Navhandler("aboutme");
                localStorage.setItem("aboutme", about);
              }}
            />
          </div>
          <br />
          <br />
          {about}
        </div>
        <div className='acc_box'>
          <span>Experience</span>
          <div className='acc_icon action'>
            <img src={plus} onClick={() => Navhandler("experience")} />
          </div>
          <div>
            {experiences.map((box: any) => {
              return <ExperienceBox key={box.id} box={box} />;
            })}
          </div>
          <pre onClick={() => Navhandler("viewexperience")}>
            {" "}
            Show more Experience <img src={arr} />
          </pre>
        </div>
        <div className='acc_box'>
          <span>Education</span>
          <div className='acc_icon action'>
            <img src={plus} onClick={() => Navhandler("education")} />
          </div>
          <div>
            {education.map((box: any) => {
              return <EducationBox key={box.id} box={box} />;
            })}
          </div>
          <pre onClick={() => Navhandler("vieweducation")}>
            Show more Education <img src={arr} />
          </pre>
        </div>
        <div className='acc_box'>
          <span>Skills</span>
          <div className='acc_icon action'>
            <img src={plus} onClick={() => Navhandler("skills")} />
          </div>
          {skills.map((box: any) => {
            return (
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "1.5vw",
                  borderBottom: "1px solid white",
                  margin: "2vw 0",
                }}
              >
                <p>{box.skill_name}</p>
              </div>
            );
          })}
          <pre onClick={() => Navhandler("viewskills")}>
            Show more Skills <img src={arr} />
          </pre>
        </div>
        <div className='acc_box'>
          <span>Test score</span>
          <div className='acc_icon action'>
            <img src={plus} onClick={() => Navhandler("additional/score")} />
          </div>
          {test.map((box: any) => {
            return <TestBox key={box.id} box={box} />;
          })}
          <pre onClick={() => Navhandler("viewtestscore")}>
            Show more Test <img src={arr} />
          </pre>
        </div>
        <div className='acc_box'>
          <span>Courses</span>
          <div className='acc_icon action'>
            <img src={plus} onClick={() => Navhandler("additional/courses")} />
          </div>
          {course.map((box: any) => {
            return <CourseBox key={box.id} box={box} />;
          })}
          <pre onClick={() => Navhandler("viewcourse")}>
            Show more Courses <img src={arr} />
          </pre>
        </div>
      </div>
      <ToastContainer theme='dark' position='top-center' />
    </div>
  );
};

export default Account;
