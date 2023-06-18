import React from 'react'
import CatergoryBar from '../components/CategoryBar'
import VideosSide from '../components/VideosSide'
import Sidebar from '../components/Sidebar'


const HomeMain = () => {
  return (
  <div className='main'>
    <Sidebar/>
    <div className='container-video'>
        <CatergoryBar/>
        <VideosSide/>
    </div>
  </div>
    
  )
}

export default HomeMain