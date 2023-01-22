
import axios from "axios";
import "../network.css"
const illustration: string = require("./cross.svg").default;

const none:any = (props:any) => {
    
    var accesstoken=localStorage.getItem("accesstoken");



    function handlemessage(){
        
    }
    
    
    return (<div className="networkcomponent">
        <div><img className="sideimage" src={props.data.following_profile_data.avatar} alt="avatar" /></div>
       <div  className="textflex"> <p style={{ fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} >{props.data.following_profile_data.name}</p>
        <span> {props.data.following_profile_data.headline}</span></div>
        {/* <div style={{marginLeft:"auto",marginTop:"25px"}}> */}
        {/* <p style={{cursor:"pointer", marginRight:"4vw",border: "1px solid #F5F5FA",borderRadius:"4px",padding:"5px 30px", display:"inline-block",  fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} onClick={handlemessage} >Following</p>     */}
        
        
        {/* </div> */}
    </div>)
}

export default none;