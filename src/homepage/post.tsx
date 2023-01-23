import React from "react";
import './homepage.css';
const add:string = require('./images/add.svg').default
const like:string = require('./images/like.svg').default
const comment:string = require('./images/comment.svg').default
const share:string = require('./images/share.svg').default
const item:string = require('./images/item.svg').default

const Post = (box:any) => {
    if (box.box.images_data[0]!=undefined)
    var images = box.box.images_data[0].image
    else
    images = ""
    console.log(images)
    return <div id='postbox'>
        <img className="shortava" src={box.box.post_owner_data.avatar} />
        <div id='postprofile'>
            <p>{box.box.post_owner_data.name}  <span><img src={add} />   Follow</span></p>
            {box.box.post_owner_data.headline}
        </div>
        <p style={{margin:"2vw 0"}}>
            {box.box.text}
        </p>
        <img id="postImg" src={images} />
        <div id="reactions">

        </div>
        <div id="postComp">
            <p><img style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={like} />Like</p>
            <p><img style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={comment} />Comments</p>
            <p><img style={{width:"1.67vw",marginRight:"1vw",verticalAlign:"top"}} src={share} />Share</p>
            <p><img style={{width:"1.1vw",marginRight:"1vw",verticalAlign:"top"}} src={item} />Save</p>
        </div>
    </div>
}

export default Post;