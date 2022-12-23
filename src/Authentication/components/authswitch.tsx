import React, { FC } from "react";

type switchprops = {
    status : string
    action : string
}

const Switch = (props: switchprops) => {
    return <div className="authbox" >
        <p id="switch">{props.status} Have An Account?<p>{props.action}</p></p>
    </div>
}

export default Switch;