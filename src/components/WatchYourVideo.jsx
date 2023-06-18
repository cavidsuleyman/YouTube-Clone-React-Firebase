import React, {useState, useEffect, useRef, useContext} from 'react';
import video from '../assets/video/cukur-video-1.mp4';
import { useParams } from 'react-router-dom';
import { VideoContext } from '../context/VideoContext';


let timeout;
let hoveredSecond;

const WatchYourVideo = () => {

  const {id} = useParams();

  const {videoData} = useContext(VideoContext)

  const product = videoData.find(product => product.id == id);

  const [previewVideo, setPreviewVideo] = useState(product.video);

  const {video} = product

  const [snapshots, setSnapshots] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMetadata, setIsMetaData] = useState(false);
  const [duration, setDuration] = useState(0);
  const animationRef = useRef();
  const progressRef = useRef(null);
  const videoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const snapshotRef = useRef(null);

  useEffect(() => {
    const seconds = videoRef.current.duration;
    setDuration(seconds);
    progressRef.current.max = seconds;
  }, [isMetadata]);
  
  const checkMetadata = () => {
    setIsMetaData(true);
  };

  const changePlayerCurrentTime = () => {
    const currentTime = videoRef.current.currentTime;
    progressRef.current.style.setProperty(
      "--seek-before-width",
      `${(currentTime / duration) * 100}%`
    );
  };

  const whilePlaying = () => {
    if (progressRef.current !== null && videoRef.current !== null) {
      progressRef.current.value = videoRef.current?.currentTime;
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const onPlaying = () => {
    setIsPlaying(true);
    whilePlaying();
    timeout = setTimeout(() => {
      progressRef.current.style.visibility = "hidden";
    }, 3000);
  };

  const onPause = () => {
    setIsPlaying(false);
    clearTimeout(timeout);
    progressRef.current.style.visibility = "visible";
    cancelAnimationFrame(animationRef.current);
  };

  const changeRange = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = progressRef.current.value;
      changePlayerCurrentTime();
    }
  };

  const onSliderHover = (e) => {
    let hoverTime = (
      ((e.clientX - e.target.offsetLeft) / e.target.clientWidth) *
      videoRef?.current?.duration
    ).toFixed(2);

    if (hoverTime < 0) {
      hoverTime = 0;
    }

    hoveredSecond = hoverTime;
    secondVideoRef.current.currentTime = hoveredSecond;

    shoot(secondVideoRef.current);

    if (snapshotRef) {
      snapshotRef.current.style.left = e.clientX - 75 + "px";
    }
  };

  const shoot = (video) => {
    let canvas = capture(video);
    setSnapshots(canvas.toDataURL());
  };

  const capture = (video) => {
    let w = video.videoWidth;
    let h = video.videoHeight;
    let canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    let ctx = canvas.getContext("2d");
    ctx?.drawImage(video, 0, 0, w, h);
    return canvas;
  };

  const onOutsideSlider = () => {
    setSnapshots("");
  };

  const calculateTime = (secs) => {
    const hours = Math.floor(secs / 3600);
    const returnedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const minutes = Math.floor((secs / 60) % 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    if (returnedHours >= 60) {
      return `${returnedHours}:${returnedMinutes}:${returnedSeconds}`;
    } else if (returnedSeconds < 60) {
      return `0:${returnedSeconds}`;
    } else {
      return `${returnedMinutes}:${returnedSeconds}`;
    }
  };

  const mouseStopped = () => {
    if (!isPlaying) {
      // progressRef.current.style.visibility = "visible";
    } else {
      // progressRef.current.style.visibility = "hidden";
    }
  };

  const onVideoHover = () => {
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 3000);
    progressRef.current.style.visibility = "visible";
  };

  const onMouseLeaveVideo = () => {
    progressRef.current.style.visibility = "visible";
  };

  return (
    <div className='watch-your-video'>
        <video
          src={previewVideo}
          controls
          preload="auto"
          crossOrigin="anonymous"
          ref={videoRef} // Add this line to assign the reference to the video element
          onLoadedMetadata={checkMetadata}
          onPlaying={onPlaying}
          onPause={onPause}
          onMouseMove={onVideoHover}
          onMouseOut={onMouseLeaveVideo}
        ></video>

        <input
          type="range"
          className="amount-progress"
          step="any"
          ref={progressRef}
          min={0}
          onMouseMove={onSliderHover}
          onMouseOut={onOutsideSlider}
          onChange={changeRange}
          value={videoRef?.current?.currentTime}
        />

      <div ref={snapshotRef} className="snapshotContainer">
          <img src={snapshots} className="snapshotImg" alt=''/>
          <div className="snapshotTime">{calculateTime(hoveredSecond)}</div>
      </div>

      <video
        src={previewVideo}
        ref={secondVideoRef}
        className="secondVideoElement"
        controls
        style={{width: "100%"}}
        preload="auto"
        crossOrigin="anonymous"
        onLoadedMetadata={checkMetadata}
        onPlaying={onPlaying}
        onPause={onPause}
      ></video>
    </div>
  )
}

export default WatchYourVideo
