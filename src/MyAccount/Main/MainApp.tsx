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
    setabout(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque iaculis dolor, at pellentesque nisi efficitur a. Aliquam pulvinar sem a lacus volutpat feugiat. Sed luctus, enim eu cursus venenatis, nunc ante rhoncus urna, ac posuere felis dolor eget nulla. Duis efficitur convallis elementum. Pellentesque dapibus fringilla magna eu finibus. Phasellus ac auctor est. Suspendisse fermentum metus nisi, quis suscipit nisi dignissim et. Sed accumsan tristique turpis nec dignissim. Aenean id vestibulum ante, non dignissim massa. Praesent eu ante maximus, sagittis nunc nec, sollicitudin lectus. Nunc ultricies risus ac enim euismod, et mattis diam commodo. Maecenas sit amet diam vitae nibh placerat lacinia in et purus.

    Duis tortor massa, tincidunt eu convallis vel, dapibus ac leo. Vivamus tincidunt pretium imperdiet. Praesent interdum lorem ac interdum vulputate. Fusce quis turpis porttitor, ornare ipsum ac, molestie magna. Morbi quam purus, gravida vitae est dignissim, porta posuere urna. Integer dapibus odio non sem porttitor pulvinar. Praesent mollis sodales metus, sit amet condimentum felis pulvinar eu. Nulla luctus orci felis, non feugiat tortor consequat id.
    
    Morbi metus diam, egestas a massa ut, vulputate accumsan enim. Sed pretium augue tellus, sit amet facilisis dui venenatis non. Maecenas placerat, purus at fermentum sollicitudin, metus lorem maximus turpis, a volutpat magna massa eu nisl. Sed tincidunt mi eget aliquet volutpat. Nullam eu dui dolor. Nam quis ante est. Pellentesque elementum lectus ut urna tristique, gravida porta risus faucibus. Sed urna dolor, auctor at lobortis nec, lacinia ac ipsum. Ut et turpis et arcu suscipit viverra. In convallis nulla nisl, non pretium arcu facilisis ac. Maecenas tincidunt dapibus nibh at ultricies. Vestibulum fringilla elit eget enim ultricies, nec convallis lacus pulvinar. Cras sed quam vitae augue eleifend tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sagittis quis dui id commodo.
    
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel interdum magna. Curabitur facilisis nec tortor nec faucibus. Phasellus vel massa vel nunc maximus egestas. Integer tempor ipsum sem, in euismod nulla cursus sit amet. Nam erat nisi, finibus sed velit vel, aliquet luctus tortor. Maecenas posuere consequat lorem ut maximus. Nulla tristique ante ac rhoncus mollis. Ut euismod mauris in finibus condimentum. Fusce at dolor mi. Integer ut laoreet risus. Etiam et leo felis. Praesent condimentum imperdiet mi eu accumsan. Duis consequat vel erat sed consequat. Quisque egestas, augue at egestas bibendum, libero diam ullamcorper magna, et malesuada lacus nisl et tortor.
    
    Aliquam aliquet odio at purus hendrerit, eget iaculis purus viverra. Quisque eget tellus interdum, viverra ipsum id, consectetur ante. Aenean consequat magna facilisis ornare tempus. Quisque vitae nisi hendrerit lacus sodales consectetur. Mauris scelerisque quam in scelerisque malesuada. In hac habitasse platea dictumst. Donec sodales, odio in lacinia tincidunt, dolor augue feugiat libero, eu imperdiet odio mi eu ante. Quisque a elit non mauris tincidunt dictum sed quis nunc. Donec facilisis libero dolor, et finibus quam vehicula vel. Morbi magna magna, blandit a luctus in, mollis eu tellus. Vestibulum varius finibus felis id tempus. Donec at auctor lectus. Donec interdum, dui a elementum varius, urna risus rutrum leo, non pharetra urna felis a felis.`);
    setavatar(
      "https://as1.ftcdn.net/v2/jpg/01/63/11/70/1000_F_163117064_syJkTuCddASYjvl4WqyRmnuy8cDXpoQY.jpg"
    );
    setcover(
      "https://cdn.dribbble.com/users/983045/screenshots/3576265/cat-landscape.jpg"
    );
    setname("dany" + " " + "dayane");
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
  const inputphoto = () => {
    document.getElementById("inpphoto")?.click();
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
            id='inpphoto'
            accept='image/*'
            onChange={showPreview}
          ></input>
          <img
            style={{ cursor: "pointer" }}
            onClick={inputphoto}
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
