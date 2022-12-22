import React from "react";

type authprops ={
    name:string
}

const Authblock = (props: authprops) => {
    return <div className="authbox" id = "authblock">{props.name}</div>
}

export default Authblock;