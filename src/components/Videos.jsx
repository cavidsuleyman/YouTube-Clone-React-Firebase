import React, {useRef, useState, useEffect, useContext} from 'react';
import { FaPlay } from "react-icons/fa";
import { ImVolumeMedium, ImVolumeMute2 } from "react-icons/im";
import { GiPauseButton } from "react-icons/gi";
import { VideoContext } from '../context/VideoContext';



const Videos = ({muted, src, autoPlay}) => {

    

    const {isPlaying,setIsPlaying,videoRef, isMute, toggleMute} = useContext(VideoContext)

    const bufferRef = useRef(null);
    const progressRef = useRef(null);
    const audioRef = useRef(null);

    
    useEffect(() => {
        if(!videoRef.current) return;

        const onPlay = () => {
            setIsPlaying(true);
        }

        const onPause = () => {
            setIsPlaying(false);
        }

        const element = videoRef.current;

        const onTimeUpdate = () => {
            if(!progressRef.current) return;
            const {currentTime, duration} = element;
            const progress = currentTime / duration;
            const width = progress * 97;
            progressRef.current.style.width = `${width}%`
        }

        element.addEventListener("play", onPlay);
        element.addEventListener("playing", onPlay);
        element.addEventListener("pause", onPause);
        element.addEventListener("timeupdate", onTimeUpdate);


        return () => {
            element.removeEventListener("play", onPlay);
            element.removeEventListener("playing", onPlay);
            element.removeEventListener("timeupdate", onTimeUpdate);
        }
    }, [videoRef.current])
    
    const handlePlayPauseVideo = () => {
        if(!videoRef.current) return;
        if(isPlaying){
            videoRef.current.pause();
        }else{
            videoRef.current.play();
        }
    }
    
  return (
    <div className='video-side'>
        <div className='video-navbar'>
            {
                isPlaying ? 

                <button onClick={handlePlayPauseVideo}><GiPauseButton size={20} color='white'/></button>

                :

                <button onClick={handlePlayPauseVideo}><FaPlay size={20} color='white'/></button>
            }

            {
                isMute ? 

                <button onClick={toggleMute}><ImVolumeMute2 size={20} color='white'/></button>

                :

                <button onClick={toggleMute}><ImVolumeMedium size={20} color='white'/></button>
            }
        </div>
        
        <span ref={progressRef} className='progress'></span>
        <span ref={bufferRef} className='buffer'></span>
        <video
        onClick={handlePlayPauseVideo} 
        autoPlay={true} 
        muted={muted} 
        src={src} 
        ref={videoRef}
        >
        </video>
       
    </div>
  )
}

export default Videos