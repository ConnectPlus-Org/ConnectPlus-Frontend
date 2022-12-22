import React, { FC } from "react";

type switchprops = {
    status : string
    action : string
    // path: string
}

const Switch = (props: switchprops) => {
    return <div className="authbox" >
        <p id="switch">{props.status} Have An Account?<a>{props.action}</a></p>
    </div>
}

export default Switch;