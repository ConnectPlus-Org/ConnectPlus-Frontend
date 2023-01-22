
import "../network.css"
const illustration: string = require("./none.svg").default;

const none:any = (props:any) => {
    return (<div className="none">
        <p style={{ fontSize:"1.10vw" }} >{props.showtext}</p>
        <img src={illustration} alt="" />
    </div>)
}

export default none;