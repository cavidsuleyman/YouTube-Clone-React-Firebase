import React from 'react'
import CategoryDetailsMain from './CategoryDetailsMain'
import VideoCategoryVideos from './VideoCategoryVideos'

const VideoCategoryBar = () => {
  return (
    <div className='video-category-details-main'>
        <CategoryDetailsMain/>
        <VideoCategoryVideos/>
    </div>
  )
}

export default VideoCategoryBar