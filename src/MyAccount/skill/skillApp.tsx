import React from "react";
import Nav from "../../navbar/navbar";
import "./skill.css"

const Skill = () => {
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
        <p>Skill Section</p>
        <div>
          Skill
          <br />
          <input placeholder="Enter Skill"/>
        </div>
    <button>Save</button>
      </div>
    </div>
  );
};

export default Skill;
