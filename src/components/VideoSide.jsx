import React from 'react';
import IconSideVideo from './IconSideVideo';
import Videos from './Videos';
import video from '../assets/video/videoplayback.mp4'



const VideoSide = () => {


  return (
    <div className='main-video'>
        <Videos src={video}/>
        <IconSideVideo/>
    </div>
  )
}

export default VideoSide;