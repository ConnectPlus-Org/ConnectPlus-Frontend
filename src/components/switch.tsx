import React, { FC } from "react";

type switchprops = {
    status : string
    action : string
}

const Switch = (props: switchprops) => {
    return <div className="authbox" >
        <p id="switch">{props.status} Have An Account?<span>{props.action}</span></p>
    </div>
}

export default Switch;