import React from "react";

type inputprops = {
    lable: string
    placeholder: string
    message: string
    type: string
}

const Input = (props: inputprops) => {
    return <div className="authbox" ><p>{props.lable}</p><input id="input" placeholder= {props.placeholder} type={props.type} /><p id="error">{props.message}</p></div>
}

export default Input;