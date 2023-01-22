
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
    url: `https://linkedin-backend.azurewebsites.net/network/connection/request/received/ignore/${props.data.id}/`,
    headers: { 
        "Authorization":`Bearer ${accesstoken}`
    },
  };
  
    function handleignore(){
        
        axios(config2)
    .then((res)=>{
        console.log(res);
       
    })
    .catch((err)=>{
        console.log(err)
    })
    }

    function handleaccept(){
        axios.post("https://linkedin-backend.azurewebsites.net/network/connection/request/received/accept/",{
            id: props.data.id
        },config)
    .then((res)=>{
        console.log(res);
       
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    return (<div className="networkcomponent">
        <div><img className="sideimage" src={props.data.sender_data.avatar} alt="avatar" /></div>
       <div  className="textflex"> <p style={{ fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} >{props.data.sender_data.name}</p>
        <span> {props.data.sender_data.headline}</span></div>
        <div style={{marginLeft:"auto",marginTop:"25px",marginRight:"2vw"}}>
        <p style={{ cursor:"pointer", width:"6vw" ,display:"inline-block", fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} onClick={handleignore} >Ignore</p>
        <p style={{cursor:"pointer", color:"#A950FB", display:"inline-block",  fontSize:"1.10vw" ,marginLeft:"0",marginBottom:"0" }} onClick={handleaccept} >Accept</p>
        </div>
    </div>)
}

export default none;