import React, { useState } from "react";
import BaseUrl from "../BaseUrl";
import Reply from "./replies";

const Comment = (comm:any) => {
    const avatar = sessionStorage.getItem('avatar') || ""
    console.log(comm)

    var accesstoken=localStorage.getItem("accesstoken");
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
    }
    const[replies,getReply] = useState([])
    function getReplies(){
        BaseUrl.get('/post/comments/replies/?comment='+comm.comm.id,config)
        .then((res)=>{
            console.log(res)
            getReply(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return <div style={{margin:"2vw 0"}} id="comment">
        <p><img src={comm.comm.comment_owner_profile.avatar} />{comm.comm.comment_owner_profile.name}</p>
        <div>{comm.comm.text}</div>
        <span>Reply</span><span onClick={getReplies}>View Replies</span>
        <div id="replybox"><img src={avatar} /><input placeholder="Comment Box"/></div>
        <div id='replies'>
            {
                replies.map((reply:any)=>{return <Reply reply={reply} key={reply.id} />})
            }
        </div>
    </div>
}

export default Comment ;