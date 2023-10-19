
import axios from "axios";
import "../network.css"
const illustration: string = require("./cross.svg").default;

const none:any = (props:any) => {
    
    var accesstoken=localStorage.getItem("accesstoken");

const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}
var config2 = {
    method: 'post',
    url: `https://linkedin-backend.azurewebsites.net/network/connection/remove/`,
    headers: { 
        "Authorization":`Bearer ${accesstoken}`
    },
    data:{
        username:props.data.connection_data.username
    }
  };
  
    function handleremove(){
        
        axios(config2)
    .then((res)=>{
        console.log(res);
       
    })
    .catch((err)=>{
        console.log(err)
    })
    }

    function handlemessage(){
        
    }
    
    
    return (<div className="networkComponent">
        <div><img className="sideImage" src={props.data.connection_data.avatar} alt="avatar" /></div>
       <div  className="textFlex"> <p style={{ fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} >{props.data.connection_data.name}</p>
        <span> {props.data.connection_data.headline}</span></div>
        <div style={{marginLeft:"auto",marginTop:"25px"}}>
        <p style={{cursor:"pointer", color:"#A950FB", display:"inline-block",  fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} onClick={handlemessage} >Message</p>    
        <p style={{ cursor:"pointer", width:"6vw" ,display:"inline-block", fontSize:"1.10vw" ,marginLeft:"1.2vw",marginBottom:"0" }} onClick={handleremove} >
            <img src={illustration} alt="" />
        </p>
        
        </div>
    </div>)
}

export default none;