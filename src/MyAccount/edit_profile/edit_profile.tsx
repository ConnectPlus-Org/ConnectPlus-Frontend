import React from "react";
import Nav from "../../navbar/navbar";
import "./edit_profile.css";

const Edit_profile = () => {
  return (
    <div>
      <Nav />
      <div id="account_nav"></div>
      <div id="edit_profile">
        <img />
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
          <input id="headline" placeholder="Headline" />
        </div>
    <button>Save</button>
      </div>
    </div>
  );
};

export default Edit_profile;
