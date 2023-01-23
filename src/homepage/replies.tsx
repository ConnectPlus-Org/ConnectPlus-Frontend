import React from "react";

const Reply = (reply:any) => {
    return <div style={{backgroundColor: '#13131a'}}>
        <p style={{marginBottom:"1vw",padding:"0"}}><img src={reply.reply.reply_owner_profile.avatar} />{reply.reply.reply_owner_profile.name}<span style={{float:"right"}}>{reply.reply.created_at.slice(10)}</span></p>
        <div id="replyText">{reply.reply.text}</div>
    </div>
}

export default Reply;