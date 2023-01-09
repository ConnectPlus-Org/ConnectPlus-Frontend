import React, { ChangeEventHandler } from "react";

type inputprops = {
    onchange?: ChangeEventHandler
    lable: string
    placeholder: string
    message: string
    type: string
    style?: object
}

const Input = (props: inputprops) => {
    return <div style={props.style} className="authbox" id = "inputbox" ><p>{props.lable}</p><input id="input" placeholder= {props.placeholder} type={props.type} onChange={props.onchange} /><p id="error">{props.message}</p></div>
}

export default Input;