import React from "react";
import './homepage.css';
const add:string = require('./images/add.svg').default

const Post = () => {
    const avatar = sessionStorage.getItem('avatar') || ''
    const name = sessionStorage.getItem('name') || ""
    const headline = sessionStorage.getItem('headLine') || ''
    return <div id='postbox'>
        <img className="shortava" src={avatar} />
        <div id='postprofile'>
            <p>{name}  <span><img src={add} />   Follow</span></p>
            {headline}
        </div>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </p>
    </div>
}

export default Post;