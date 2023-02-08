import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import BaseUrl from "../BaseUrl";
import Reply from "./replies";
var replyCheck:number = 0
var replyar:number = 0

const Comment = (comm:any) => {
    const avatar = sessionStorage.getItem('avatar') || ""
    console.log(comm)
    var replyClass: string = 'replyar' + comm.comm.post

    var replyBox = document.getElementsByClassName(replyClass) as HTMLCollectionOf<HTMLElement>
    var accesstoken=localStorage.getItem("accesstoken");
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
    }
    const[replies,getReply] = useState([])
    function getReplies(){
        if(replyCheck==0)
        {BaseUrl.get('/post/comments/replies/?comment='+comm.comm.id,config)
        .then((res)=>{
            console.log(res)
            getReply(res.data)
            replyCheck=1
        })
        .catch((err)=>{
            console.log(err)
        })}
        else{
            replyCheck=0
            getReply([])
        }
    }
    function replyarea(){
        if(replyar==0)
        {
            replyBox[comm.index]!.style.display='block'
            replyar=1
        }
        else{
            replyBox[comm.index]!.style.display='none'
            replyar=0
        }
    }

    function postReply(e:any){
        const details = {
            text: e.target.value,
            comment: comm.comm.id
        }
       BaseUrl.post('/post/comments/replies/',details,config)
       .then((res)=>{
           console.log(res)
           toast.info('reply posted')
           e.target.value=''
           replyBox[comm.index]!.style.display='none'

       })
       .catch((err)=>{
           console.log(err)
       })
    }

    var commentTime:string = comm.comm.created_at
    const d = commentTime.slice(10,16)
    return <div style={{margin:"2vw 0"}} id="comment">
        <p><img src={comm.comm.comment_owner_profile.avatar} />{comm.comm.comment_owner_profile.name}<span style={{float:"right"}}>{comm.comm.created_at.slice(10)}</span></p>
        <div className="commentDiv">{comm.comm.text}</div>
        <span onClick={()=>replyarea()}>Reply</span><span onClick={getReplies}>View Replies</span>
        <div style={{display:"none",margin:"1vw 0"}} className={replyClass} id="replybox"><img src={avatar} /><input onKeyDown={(e)=>{if(e.code==='Enter'){postReply(e)}}} placeholder="Comment Box"/></div>
        <div style={{backgroundColor:"#13131a"}} id='replies'>
            {
                replies.map((reply:any)=>{return <Reply reply={reply} key={reply.id} />})
            }
        </div>
        <ToastContainer theme="dark" position="top-center" />
    </div>
}

export default Comment ;