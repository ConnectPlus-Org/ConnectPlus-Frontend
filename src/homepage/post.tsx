import React from "react";
import './homepage.css';
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

const Post = (box:any) => {

    var reaction = document.getElementsByClassName('reactions') as HTMLCollectionOf<HTMLElement>
    if (box.box.images_data[0]!=undefined)
    var images = box.box.images_data[0].image
    else
    images = ""
    var c:number = 0

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
        <img style={{width:"1.67vw",verticalAlign:"top"}} src={liked} />
        <img style={{width:"1.67vw",verticalAlign:"top"}} src={bulb} />
        <img style={{width:"1.67vw",verticalAlign:"top"}} src={heart} />
        <img style={{width:"1.67vw",verticalAlign:"top"}} src={hand} />
        <img style={{width:"1.67vw",verticalAlign:"top"}} src={think} />
        <img style={{width:"1.67vw",verticalAlign:"top"}} src={clap} />
        <img style={{width:"1.67vw",verticalAlign:"top"}} src={laugh} />
        </div>
        <div id="postComp">
            <p onMouseOver={()=>{reaction[box.seq]!.style.visibility='visible';c=1}} onMouseOut={()=> setTimeout(()=>{reaction[box.seq]!.style.visibility='hidden';c=0},3000)} id="like"><img onMouseOver={()=>{reaction[box.seq]!.style.visibility='visible';c=1}} style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={like} />Like</p>
            <p><img style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={comment} />Comments</p>
            <p><img style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={share} />Share</p>
            <p><img style={{width:"1.1vw",marginRight:"1vw",verticalAlign:"top"}} src={item} />Save</p>
        </div>
    </div>
}

export default Post;