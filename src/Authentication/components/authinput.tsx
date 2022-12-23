import React, { ChangeEventHandler } from "react";

type inputprops = {
    onchange : ChangeEventHandler
    lable: string
    placeholder: string
    message: string
    type: string
}

const Input = (props: inputprops) => {
    return <div className="authbox" ><p>{props.lable}</p><input id="input" onChange={props.onchange} placeholder= {props.placeholder} type={props.type} /><p id="error">{props.message}</p></div>
}

export default Input;