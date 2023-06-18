import React from 'react'
import VideoCategoryBar from './VideoCategoryBar';
import WatchVideo from './WatchVideo'

const VideoDetails = () => {
  return (
    <div className='video-details-main'>
      <div className='details-main'>
         <WatchVideo/>
         <VideoCategoryBar/>
      </div> 
    </div>
  )
}

export default VideoDetails