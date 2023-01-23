import React, { useEffect, useState } from "react";
import BaseUrl from "../BaseUrl";
import './homepage.css';
import Comment from "./comment";
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


const Post = (box:any) => {
    var [reactionStatus,setReaction] = useState(like)
  var [selfReaction,setReactState] = useState(box.box.self_reaction);
  var [comments,getComment] = useState([])
  const avatar = sessionStorage.getItem('avatar') || ""
//   if(selfReaction==true)
//   useEffect(()=>updateReaction(box.box.self_reaction_data.reaction_type),[])

  function updateReaction(r:number){
        if (r == 1) setReaction(liked);
        else if (r == 2) setReaction(bulb);
        else if (r == 6) setReaction(heart);
        else if (r == 7) setReaction(hand);
        else if (r == 3) setReaction(think);
        else if (r == 5) setReaction(clap);
        else if (r == 4) setReaction(laugh);
    }
    function viewComment(post:number){
        BaseUrl.get('/post/comments/?post='+post,config)
        .then((res)=>{
            getComment(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })}

    // useEffect(()=>viewComment(box.box.id),[])

    var reaction = document.getElementsByClassName('reactions') as HTMLCollectionOf<HTMLElement>
    if (box.box.images_data[0]!=undefined)
    var images = box.box.images_data[0].image
    else
    images = ""
    var c:number = 0

    var accesstoken=localStorage.getItem("accesstoken");
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
    const [reload,setReload] = useState(false)
    function addReaction(r:number){
        setReload(!reload)
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
        })
        .catch((err)=>{
            console.log(err)
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
        })
        .catch((err)=>{
            console.log(err)
        })}

    }
    return <div id='postbox'>
        <img className="shortava" src={box.box.post_owner_profile.avatar} />
        <div id='postprofile'>
            <p>{box.box.post_owner_profile.name}  <span><img src={add} />   Follow</span></p>
            {box.box.post_owner_profile.headline}
        </div>
        <p style={{margin:"2vw 0"}}>
            {box.box.text}
        </p>
        <img id="postImg" src={images} />
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
            <p onMouseOver={()=>{reaction[box.seq]!.style.visibility='visible';c=1}} onMouseOut={()=> setTimeout(()=>{reaction[box.seq]!.style.visibility='hidden';c=0},3000)} id="like"><img onMouseOver={()=>{reaction[box.seq]!.style.visibility='visible';c=1}} style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={reactionStatus} />Like</p>
            <p onClick={()=>viewComment(box.box.id)}><img style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={comment} />Comments</p>
            <p><img style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={share} />Share</p>
            <p><img style={{width:"1.1vw",marginRight:"1vw",verticalAlign:"top"}} src={item} />Save</p>
        </div>
        <div id="comment"><img src={avatar} /><input placeholder="Comment Box"/></div>
        <div>
            {
                comments.map((comm:any)=>{return <Comment comm={comm} key={comm.id} />})
            }
        </div>
    </div>
}

export default Post;

