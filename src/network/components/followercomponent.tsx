
import axios from "axios";
import "../network.css"
const illustration: string = require("./cross.svg").default;

const none:any = (props:any) => {
    
    var accesstoken=localStorage.getItem("accesstoken");



    function handlemessage(){
        
    }
    
    
    return (<div className="networkComponent">
        <div><img className="sideImage" src={props.data.follower_profile_data.avatar} alt="avatar" /></div>
       <div  className="textFlex"> <p style={{ fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} >{props.data.follower_profile_data.name}</p>
        <span> {props.data.follower_profile_data.headline}</span></div>
        <div style={{marginLeft:"auto",marginTop:"25px"}}>
        <p style={{cursor:"pointer", marginRight:"4vw",border: "1px solid #F5F5FA",borderRadius:"4px",padding:"5px 30px", display:"inline-block",  fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} onClick={handlemessage} >Following</p>    
        
        
        </div>
    </div>)
}

export default none;