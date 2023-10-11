import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../navbar/navbar"
import "./search.css"
import { ToastContainer, toast } from 'react-toastify';
import "../BaseUrl"
import BaseUrl from "../BaseUrl";
import SearchComponent from "./searchcomponent"

const search: string = require("./search.svg").default;
const nomatch: string = require("./nomatch.svg").default;

const Search = () => {
  
  const [searchres,setsearchres] = useState([]);
  const [none,setnone] = useState(true)
  const [searchText,setSearchText] = useState("")

  const api =()=>{BaseUrl.get(`/profile/search/?search=${searchText}`,config)
    .then((res)=>{
        console.log(res);
        setsearchres(res.data);
        if(res.data.length!==0)
        setnone(false);
        else
        setnone(true);
    })
    .catch((err)=>{
        console.log(err)
    })
}

  const Navhandler= useNavigate();
  
var accesstoken=localStorage.getItem("accesstoken");

const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}


  return (
    <div>
      <Nav />
      <div className="searchtext">Search</div>
      <img className="searchicon" src={search} alt="searchicon" />
      <input type="text" placeholder="Search" onChange={(e:any)=>{setSearchText(e.target.value); api()}} value={searchText} className="searchinput" />
        {none ?  
        <img src={nomatch} className="nomatch" alt="no match" />
        : 
        <div className="searchresults">
          {searchres.map((data,index)=>{return <SearchComponent key={index} data={data} api={api}/>})}
        </div> }
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default Search;
