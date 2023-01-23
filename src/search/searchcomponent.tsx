
import axios from "axios";
import "../network/network.css"
import { useNavigate } from "react-router-dom";
import BaseUrl from "../BaseUrl";

const illustration: string = require("./follow.svg").default;

const None:any = (props:any) => {
    const Navhandler= useNavigate();
    var accesstoken=localStorage.getItem("accesstoken");
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }


    function handleredirect(){
        Navhandler(`/account/?username=${props.data.username}`)
    }
    
    function handlefollow(){
        BaseUrl.post("/network/following/",{
            "username":props.data.username
        },config)
        .then((res)=>{
            console.log(res);
            props.api();
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
    function handleunfollow(){
        BaseUrl.post("/network/unfollow/",{
            "username":props.data.username
        },config)
        .then((res)=>{
            console.log(res);
            props.api();
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
    
    return  (<div className="networkcomponent searchcomponent">
        
    <div><img onClick={handleredirect} className="sideimage" src={props.data.avatar} alt="avatar" /></div>
   <div onClick={handleredirect} className="textflex"> <p style={{ fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} >{props.data.first_name} {props.data.last_name}</p>
    <span> {props.data.headline}</span></div>
    <div style={{marginLeft:"auto",marginTop:"25px"}}>
    {/* <p style={{cursor:"pointer", marginRight:"4vw",border: "1px solid #F5F5FA",borderRadius:"4px",padding:"5px 30px", display:"inline-block",  fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} onClick={handlemessage} >Follow</p>     */}
    {!props.data.is_following?<img src={illustration} onClick={handlefollow} style={{cursor:"pointer", marginTop:"1vh",marginRight:"2.7vw", display:"inline-block" }}alt="follow" />
    :  <p style={{cursor:"pointer", marginRight:"2vw",border: "1px solid #F5F5FA",borderRadius:"4px",padding:"5px 19px", display:"inline-block",  fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} onClick={handleunfollow} >Following</p>}
    </div>
</div>)

   
}

export default None;