import React, { useEffect, useState } from "react";
import BaseUrl from "../BaseUrl";
import './homepage.css';
import Comment from "./comment";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const add:string = require('./images/add.svg').default
const like:string = require('./images/like.svg').default
const liked:string = require('./images/liked.svg').default
const comment:string = require('./images/comment.svg').default
const share:string = require('./images/share.svg').default
const item:string = require('./images/item.svg').default
const clap:string = require('./images/clap.svg').default
const bulb:string = require('./images/bulb.svg').default
const laugh:string = require('./images/laugh.svg').default
const think:string = require('./images/think.svg').default
const heart:string = require('./images/heart.svg').default
const hand:string = require('./images/hand.svg').default
let reactionId:number
var commentlist:number = 0


const Post = (box:any) => {
    const username:string = sessionStorage.getItem('username') || ""
    const Navhandler = useNavigate()
    var [reactionStatus,setReaction] = useState(like)
  var [selfReaction,setReactState] = useState(box.box.self_reaction);
  var [comments,getComment] = useState([])
  const avatar = sessionStorage.getItem('avatar') || ""

    const likelist = document.getElementsByClassName('likestatus') as HTMLCollectionOf<HTMLElement>
  function updateReaction(r:number){
        if (r == 1) setReaction(liked);
        else if (r == 2) setReaction(bulb);
        else if (r == 6) setReaction(heart);
        else if (r == 7) setReaction(hand);
        else if (r == 3) setReaction(think);
        else if (r == 5) setReaction(clap);
        else if (r == 4) setReaction(laugh);
    }
    if(box.box.self_reaction == true)
    {
        reactionId=box.box.self_reaction_data.id;
    }

  var [selfReaction,setReactState] = useState(box.box.self_reaction);
  var [comments,getComment] = useState([])
    function viewComment(){
        if(commentlist==0)
        {BaseUrl.get('/post/comments/?post='+box.box.id,config)
        .then((res)=>{
            getComment(res.data)
            commentlist=1
        })
        .catch((err)=>{
            console.log(err)
        })}
        else{
            commentlist=0
            getComment([])
        }}

    function postComment(e:any){
        const details = {
            text: e.target.value,
            post: box.box.id
        }
       BaseUrl.post('/post/comments/',details,config)
       .then((res)=>{
           console.log(res)
           e.target.value = ""
           toast.info("Comment Successfully Posted")
       })
       .catch((err)=>{
           console.log(err)
            e.target.value = ""
           viewComment();
       })
    }

    var reaction = document.getElementsByClassName('reactions') as HTMLCollectionOf<HTMLElement>
    if (box.box.images_data[0]!=undefined)
    var images = box.box.images_data
    else
    images = false
    var c:number = 0

    var accesstoken=localStorage.getItem("accesstoken");
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
    function addReaction(r:number){
        if(selfReaction===false)
        {
            const object = {
                post:box.box.id,
                reaction_type:r
            }
        BaseUrl.post('/post/reactions/',object,config)
        .then((res)=>{
            console.log(res)
            setReactState(true)
            reactionId = res.data.id
            console.log(reactionId)
            updateReaction(r)
            toast.info("reaction is successfully added")
        })
        .catch((err)=>{
            console.log(err)
            toast.error('you already reacted on this post')
        })}
        else
        {
            const object = {
            reaction_type:r
        }
        BaseUrl.patch(`/post/reactions/${reactionId}/`,object,config)
        .then((res)=>{
            console.log(res)
            updateReaction(r)
            toast.info("reaction is successfully updated")
        })
        .catch((err)=>{
            console.log(err)
            toast.error("reaction is not edited")
        })}

    }

    function deleteReaction(){
        BaseUrl.delete(`/post/reactions/${reactionId}/`,config)
        .then((res)=>{
            setReaction(like);
            console.log(res);
            selfReaction=false;
            toast.info("Reaction removed")
        })
        .catch((err)=>{
            console.log(err)
            toast.info("Reaction not removed")
        })
    }

    function sendFollow() {
        if(box.box.post_owner_profile.username!=username)
        {BaseUrl.post('/network/following/',{username:box.box.post_owner_profile.username},config)
        .then((res)=>{
            console.log(res)
            toast.info("you started following this account!!")
        })
        .catch((err)=>{
            console.log(err)
            toast.error("You are already following this account!!")
        })}
        else
        toast.error("you can't follow yourself");
    }

    function bookmarkPost(){
        BaseUrl.post('post/bookmark/',{post_id:box.box.id},config)
        .then((res)=>{
            console.log(res)
            toast.info("Post Is Successfully saved!!")
        })
        .catch((err)=>{
            console.log(err)
            toast.error("Post is not saved!!")
        })
    }
    return <div id='postbox'>
        <div className='postStatus' style={{marginBottom:"2vw"}}><span>{box.box.message}</span><span style={{float:"right"}}>{box.box.created_at}</span></div>
        <img style={{cursor:"pointer"}} onClick={()=>{Navhandler(`/account/?username=${box.box.post_owner_profile.username}`);sessionStorage.setItem('viewusername',box.box.post_owner_profile.username)}} className="shortava" src={box.box.post_owner_profile.avatar} />
        <div id='postprofile'>
            <p>{box.box.post_owner_profile.name}  {(box.box.post_owner_profile.username!=username)?<span style={{cursor:"pointer"}} onClick={()=>sendFollow()}><img style={{width:"1vw"}} src={add} />
            Follow</span>:null}</p>
            {box.box.post_owner_profile.headline}
        </div>
        <p style={{margin:"2vw 0"}}>
            {box.box.text}
        </p>
        
        {images && <Carousel showThumbs={false}>
                
                {images.map((data:any)=><div>
                    <img id="postImg" src={data.image} />
                </div>)}
               { (box.box.video_linked) && <div>
                    <video width="320" height="240" controls>
                    <source src={box.box.video_linked} type="video/mp4" />
                        
                    Your browser does not support the video tag.
                    </video>
                </div>} 
                
            </Carousel> } 
        <div className='postStatus' style={{marginBottom:"2vw"}}><span>{box.box.reactions_count} likes</span><span style={{float:"right"}}>{box.box.comments_count} comments</span></div>
        <div className="reactions">
        <img onClick={()=>addReaction(1)} style={{width:"1.67vw",verticalAlign:"top"}} src={liked} />
        <img onClick={()=>addReaction(2)} style={{width:"1.67vw",verticalAlign:"top"}} src={bulb} />
        <img onClick={()=>addReaction(6)} style={{width:"1.67vw",verticalAlign:"top"}} src={heart} />
        <img onClick={()=>addReaction(7)} style={{width:"1.67vw",verticalAlign:"top"}} src={hand} />
        <img onClick={()=>addReaction(3)} style={{width:"1.67vw",verticalAlign:"top"}} src={think} />
        <img onClick={()=>addReaction(5)} style={{width:"1.67vw",verticalAlign:"top"}} src={clap} />
        <img onClick={()=>addReaction(4)} style={{width:"1.67vw",verticalAlign:"top"}} src={laugh} />
        </div>
        <div id="postComp">
            <p onMouseOver={()=>{reaction[box.seq]!.style.visibility='visible';c=1}} onMouseOut={()=> setTimeout(()=>{reaction[box.seq]!.style.visibility='hidden';c=0},3000)} id="like"><img onMouseOver={()=>{reaction[box.seq]!.style.visibility='visible';c=1}} style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} className='likestatus' src={reactionStatus} />Like</p>
            <p onClick={()=>viewComment()}><img style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={comment} />Comments</p>
            <p><img style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={share} />Share</p>
            <p onClick={()=>bookmarkPost()}><img style={{width:"1.1vw",marginRight:"1vw",verticalAlign:"top"}} src={item} />Save</p>
        </div>
        <div id="comment"><img className="commentAvatar" src={avatar} /><input className="commentInput" style={{}} onKeyDown={(e)=>{if(e.code==='Enter'){postComment(e)}}} placeholder="Comment Box"/></div>
        <div className='commentlist'>
            {
                comments.map((comm:any,index)=>{return <Comment index={index} comm={comm} key={comm.id} />})
            }
        </div>
        <ToastContainer theme="dark" position="top-center" />
    </div>
}

export default Post;

