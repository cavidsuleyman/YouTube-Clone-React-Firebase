import React from 'react'
import WatchYourVideo from './WatchYourVideo'
import VideoDescription from './VideoDescription'
import ShowMore from './ShowMore'
import CommentSide from './CommentSide'

const WatchVideo = () => {
  return (
    <div className='watch-video-main'>
          <WatchYourVideo/>
          <VideoDescription/>
          <ShowMore/>
          <CommentSide/>
      </div>
  )
}

export default WatchVideo