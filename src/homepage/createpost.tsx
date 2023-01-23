
import "./createpost.css"

const photobox:string = require('./images/photobox.svg').default
const videobox:string = require('./images/videobox.svg').default

function post(props:any){


return <div className="overlay">
<div className="overlay__background" onClick={props.setPostClick} />
<div className="overlay__container">
  <div className="overlay__controls">
    <button
      className="overlay__close"
      type="button"
      onClick={props.setPostClick}
    />
  </div>
  <p className="postboxtopline">Create a post</p>
  <textarea className="createposttextbox" placeholder="Write Something" name="post" id="" cols={30} rows={10}></textarea>
  <img src={photobox} alt="photobox" />
  <img src={videobox} alt="videobox" />
  <button className="postbutton" >Post</button>
</div>
</div>
}

export default post;