import React from "react";

type inputprops = {
    lable: string
    placeholder: string
}

const Input = (props: inputprops) => {
    return <div><p>{props.lable}</p><input id="input" placeholder= {props.placeholder} /></div>
}

export default Input;