import React from "react";

type authprops ={
    name:string
}

const Authblock = (props: authprops) => {
    return <button className="authbox" id = "authblock">{props.name}</button>
}

export default Authblock;