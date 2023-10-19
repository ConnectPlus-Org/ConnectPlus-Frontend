
import axios from "axios";
import "../network.css"
const illustration: string = require("./cross.svg").default;

const none:any = (props:any) => {
    
    var accesstoken=localStorage.getItem("accesstoken");



    function handlemessage(){
        
    }
    
    
    return (<div className="networkComponent">
        <div><img className="sideImage" src={props.data.following_profile_data.avatar} alt="avatar" /></div>
       <div  className="textFlex"> <p style={{ fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} >{props.data.following_profile_data.name}</p>
        <span> {props.data.following_profile_data.headline}</span></div>

    </div>)
}

export default none;