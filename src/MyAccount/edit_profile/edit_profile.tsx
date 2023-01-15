import React from "react";
import Nav from "../../navbar/navbar";
import "./edit_profile.css";

const Editprofile = () => {
  return (
    <div>
      <Nav />
      <div id="account_nav">
        <p>Edit profile</p>
        <p>Skill Section</p>
        <p>Experience</p>
        <p>About Me</p>
        <p>Education</p>
      </div>
      <div id="edit_profile">
        <img alt="" />
        <div>
          First Name
          <br />
          <input className="edit_input" placeholder="First Name" />
        </div>
        <div>
          Last Name
          <br />
          <input className="edit_input" placeholder="Last Name" />
        </div>
        <div>
          Country/Region
          <br />
          <input className="edit_input" placeholder="Country/Region" />
        </div>
        <div>
          City/District
          <br />
          <input className="edit_input" placeholder="City/District" />
        </div>
        <div>
          Headline
          <br />
          <input id="headline" placeholder="Heading"/>
        </div>
    <button>Save</button>
      </div>
    </div>
  );
};

export default Editprofile;
