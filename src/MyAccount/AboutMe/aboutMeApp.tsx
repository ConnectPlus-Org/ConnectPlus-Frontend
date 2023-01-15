import React from "react";
import Nav from "../../navbar/navbar";
import "../skill/skill.css"

const AboutMe = () => {
  return (
    <div>
      <Nav />
      <div id="account_nav">
        <p>Edit profile</p>
        <p>Skill Section</p>
        <p>Experience</p>
        <p>About Me</p>
        <p>Education</p>
        <p>Additional</p>
      </div>
      <div id="skill">
        <p>About Me</p>
        <div>
          About Me
          <br />
          <textarea id="aboutme"/>
        </div>
    <button>Save</button>
      </div>
    </div>
  );
};

export default AboutMe;
