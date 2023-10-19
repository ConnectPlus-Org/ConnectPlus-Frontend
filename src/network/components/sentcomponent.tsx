
import axios from "axios";
import "../network.css"

const none:any = (props:any) => {
    
    var accesstoken=localStorage.getItem("accesstoken");

const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}
var config2 = {
    method: 'patch',
    url: `https://linkedin-backend.azurewebsites.net/network/connection/request/send/withdraw/${props.data.id}/`,
    headers: { 
        "Authorization":`Bearer ${accesstoken}`
    },
  };
  
    function handlewithdraw(){
        
        axios(config2)
    .then((res)=>{
        console.log(res);
       
    })
    .catch((err)=>{
        console.log(err)
    })
    }

    
    return (<div className="networkComponent">
        <div><img className="sideImage" src={props.data.reciever_data.avatar} alt="avatar" /></div>
       <div  className="textFlex"> <p style={{ fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} >{props.data.reciever_data.name}</p>
        <span> {props.data.reciever_data.headline}</span></div>
        <div style={{marginLeft:"auto",marginTop:"25px",marginRight:"2vw"}}>
        <p style={{ cursor:"pointer", width:"6vw" ,display:"inline-block", fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} onClick={handlewithdraw} >Withdraw</p>
        
        </div>
    </div>)
}

export default none;