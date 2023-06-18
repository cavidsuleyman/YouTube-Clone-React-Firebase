import React, { useContext } from 'react'
import { VideoContext } from '../context/VideoContext';
import { ImVolumeMedium, ImVolumeMute2 } from 'react-icons/im';

const HoverOverlay = () => {

    const {progressRef, bufferRef , isMute, toggleMute} = useContext(VideoContext)

  return (
    <>
        {
             isMute ? 

             <button className='video-muted-btn' onClick={toggleMute}><ImVolumeMute2 size={20} /></button>

             :

             <button className='video-muted-btn' onClick={toggleMute}><ImVolumeMedium size={20} /></button>
        }
        
        <span ref={progressRef} className='progress-main-video'></span>
        <span ref={bufferRef} className='buffer-main-video'></span> 
    </>
  )
}

export default HoverOverlay