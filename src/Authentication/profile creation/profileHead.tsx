import React, { useState } from 'react';
import './profile.css';
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import Loader from "../../loader";
import { useNavigate } from 'react-router';
import axios from 'axios';
import BaseUrl from '../../BaseUrl';
import { toast } from 'react-toastify';


const illustration: string = require("../images/profile.svg").default;
const edit: string = require("../images/edit.svg").default;

function ProfileHead(this: any) {
  const Navhandler = useNavigate();
  var accesstoken = localStorage.getItem("accesstoken");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`
    },
  }
  const [loading, setLoading] = useState(false);
  const fname: string = (localStorage.getItem("fname") || (""));
  const lname: string = (localStorage.getItem("lname") || (""));
  const country: string = (localStorage.getItem("country") || (""));
  const city: string = (localStorage.getItem("city") || (""));

  if (!(fname && lname && country && city))
    Navhandler("/profile");

  const boxstyle = {
    height: '35vw'
  }
  const [headline, setheadline] = useState("");

  function handlechange(e: any) {
    setheadline(e.target.value);
  }

  const inputavatar = () => {
    document.getElementById('inpava')?.click()
  }

  const [fileData, setFileData] = useState('')

  function handleavatar(e: any) {
    if(((e.target.files[0].size)/(1024*1024))<1)
    {
      var src = URL.createObjectURL(e.target.files[0])
      let preview: any = document.getElementById('avatar')
      preview!.src = src;
      preview!.style.display = "block";
      setFileData(e.target.files[0])
    }
    else
    toast.error("upload image less than 1 mb")
  }

  function handleApi() {

    setLoading(true)
    const object = new FormData()
    object.append("first_name", fname)
    object.append("last_name", lname)
    object.append("country", country)
    object.append("city", city)
    object.append("headline", headline)
    object.append("avatar", fileData)
    BaseUrl.post(
      "/profile/userprofile/",
      object, config)
      .then((res) => {
        console.log(res);
        localStorage.clear();
        localStorage.setItem("avatar", res.data.avatar)
        localStorage.setItem("username", res.data.username)
        localStorage.setItem("name", res.data.first_name + " " + res.data.last_name)
        localStorage.setItem("headLine", res.data.headline)
        setLoading(false);
        Navhandler('/')
      })
      .catch((err) => {
        console.log(err);
        toast.error("profile already exist");
        setLoading(false);
      });
  }


  return <div>
    {loading ? <Loader /> :
      <div>
        <Heading />
        <img className='profileillustration' src={illustration} alt="illustration" />
        <div className='centrebox' style={boxstyle}>
          <p className='bigboi'>Make a Professional Profile</p>
          <div id="ava"><input type="file" accept=".jpg, .jpeg, .png" id="inpava" style={{ display: 'none' }} onChange={handleavatar} /><img style={{ display: "none" }} id="avatar" /><img id="editavatar" src={edit} alt="" onClick={inputavatar} /></div>
          <div>
            Headline
            <br />
            <textarea onChange={handlechange} id="prof_head" placeholder="Heading" />
          </div>
          <Authblock onclick={handleApi} name='Next' />
        </div>
      </div>}</div>
}
export default ProfileHead;