import React, { ChangeEventHandler } from "react";

type inputprops = {
    onchange?: ChangeEventHandler
    lable: string
    placeholder: string
    message: string
    type: string
    style?: object
    err_id?: string
}

const Input = (props: inputprops) => {
    return <div style={props.style} className="authbox" id = "inputbox" ><p>{props.lable}</p><input className="input" placeholder= {props.placeholder} type={props.type} onChange={props.onchange} /><p className="error" id={props.err_id}>{props.message}</p></div>
}

export default Input;