import { useState } from "react";
import "./createpost.css";
import BaseUrl from "../BaseUrl";
import Loader from "../loader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

let vidsrc: any;
const photobox: string = require("./images/photobox.svg").default;
const videobox: string = require("./images/videobox.svg").default;

let imgarray: any = [];

function Post(props: any) {
  var accesstoken = localStorage.getItem("accesstoken");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  const [imageData, setImageData] = useState([]);
  const [videoData, setVideoData] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  function handleVideo(e: any) {
    setVideoData(e.target.files[0]);
    vidsrc = URL.createObjectURL(e.target.files[0]);
    console.log(videoData);
  }

  const inputPhoto = () => {
    setImageData([]);
    imgarray = [];
    document.getElementById("inpPhoto")?.click();
  };
  const inputVideo = () => {
    setVideoData("");
    vidsrc = "";
    document.getElementById("inpVideo")?.click();
  };

  function showPreview(event: any) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        var src = URL.createObjectURL(event.target.files[i]);
        imgarray.push(src);
      }
      let preview: any = document.getElementById("preview");
      preview!.style.display = "block";
      setImageData(event.target.files);
      console.log(imageData);
    }
  }

  function handleApi() {
    const object = new FormData();
    object.append("text", text);
    if (imageData.length !== 0) {
      [...imageData].forEach((image) => {
        object.append("images", image);
      });
    }
    if (videoData !== "") object.append("video_linked", videoData);
    console.log(object);
    setLoading(true);
    BaseUrl.post("/post/create/", object, config)
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

  return (
    <div className="overlay">
      <div
        className="overlayBackground"
        onClick={() => {
          setImageData([]);
          setVideoData("");
          props.setPostClick(!props.postClick);
        }}
      />
      <div className="overlayContainer">
        <div className="overlayControls">
          <button
            className="overlayClose"
            type="button"
            onClick={() => {
              setImageData([]);
              setVideoData("");
              props.setPostClick(!props.postClick);
            }}
          />
        </div>
        <p className="postboxTopline">Create a post</p>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <textarea
              maxLength={120}
              onChange={(e: any) => {
                setText(e.target.value);
              }}
              className="createPostTextBox"
              value={text}
              placeholder="Write Something"
              name="post"
              id=""
              cols={30}
              rows={10}
            ></textarea>
            <div id="preview">
              <Carousel showThumbs={false}>
                {imgarray.map((file: any) => {
                  return (
                    <div>
                      <img src={file} alt="" />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <img
              onClick={inputPhoto}
              style={{ cursor: "pointer" }}
              src={photobox}
              alt="photobox"
            />
            <input
              multiple
              style={{ display: "none" }}
              type="file"
              id="inpPhoto"
              accept="image/*"
              onChange={showPreview}
            ></input>
            <img
              onClick={inputVideo}
              style={{ cursor: "pointer" }}
              src={videobox}
              alt="videobox"
            />
            <input
              style={{ display: "none" }}
              type="file"
              id="inpVideo"
              accept="video/*"
              onChange={handleVideo}
            ></input>
            <button onClick={handleApi} className="postButton">
              Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;