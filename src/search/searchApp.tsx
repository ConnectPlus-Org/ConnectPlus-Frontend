import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../navbar/navbar"
// import Skillcomponent from "./searchbox";
import "./search.css"
import { ToastContainer, toast } from 'react-toastify';


const Search = () => {
  
  const [searchres,setsearchres] = useState([]);
  const [none,setnone] = useState(true)

  useEffect(()=>{axios.get("https://linkedin-backend.azurewebsites.net/network/connection/list/",config)
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
})

  const Navhandler= useNavigate();
  const activestyle={
    color:'#A950FB' ,
    borderLeft:'3px solid #A950FB',
   
}
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
        {/* {none ? <None showtext="No Connections" />: 
        <div style={{marginTop:"2vh"}}>
          {searchres.map((data)=>{return <ConnectionComponent data={data}/>})}
        </div> } */}
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default Search;
