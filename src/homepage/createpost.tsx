
import { useState } from "react"
import "./createpost.css"
import BaseUrl from '../BaseUrl';
import Loader from "../loader";

const photobox:string = require('./images/photobox.svg').default
const videobox:string = require('./images/videobox.svg').default

function Post(props:any){
  var accesstoken = localStorage.getItem("accesstoken");
      const config ={
      headers:{
    Authorization:`Bearer ${accesstoken}`},
    }
  const [imageData, setImageData] = useState('')
  const [videoData, setVideoData] = useState('')
  const [text, setText] = useState('')
  const [loading,setLoading]=useState(false);

  function handlevideo(e:any) {
    setVideoData(e.target.files[0])
    console.log(videoData);
}

  const inputphoto = () => {
    document.getElementById('inpphoto')?.click()
}
  const inputvideo = () => {
    document.getElementById('inpvideo')?.click()
}

function showPreview(event:any){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    let preview:any = document.getElementById("file-ip-1-preview");
    preview!.src = src ;
    preview!.style.display = "block";
    setImageData(event.target.files[0])
    console.log(imageData)
  }
}

function handleapi(){
      
  const object = new FormData()
  object.append("text",text)
  if(imageData!=='')
  object.append("images",imageData)
  if(videoData!=='')
  object.append("video_linked",videoData)
  // object.append("city",city)
  // object.append("headline",headline)
  // object.append("avatar",fileData)
  console.log(object);
  setLoading(true);
  BaseUrl.post(
        "/post/create/",
        object,config)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
      props.setPostClick();
  }

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
  {loading?<Loader />:<div>
  <textarea maxLength={120} onChange={(e:any)=>{setText(e.target.value) }} className="createposttextbox" value={text} placeholder="Write Something" name="post" id="" cols={30} rows={10}></textarea>
  <div className="preview">
   <img style={{display:"none"}} id="file-ip-1-preview" />
 </div>
  <img onClick={inputphoto}  style={{cursor:"pointer"}} src={photobox} alt="photobox" />
  <input style={{display:"none"}} type="file" id="inpphoto" accept="image/*" onChange={showPreview} ></input>
  <img  onClick={inputvideo} style={{cursor:"pointer"}}  src={videobox} alt="videobox" />
  <input style={{display:"none"}} type="file" id="inpvideo" accept="video/*"  ></input>

  <button onClick={handleapi} className="postbutton" >Post</button></div>}
</div>
</div>
}

export default Post;