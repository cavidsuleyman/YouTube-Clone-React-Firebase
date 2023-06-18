import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import VideoSide from './VideoSide';

const ShortSide = () => {
  return (
    <div className='shortside'>
        <VideoSide/>
        <button className='btn up-btn'><AiOutlineArrowUp size={20}/></button>
        <div className='short-video'></div>
        <button className='btn down-btn'><AiOutlineArrowDown size={20}/></button>
    </div>
  )
}

export default ShortSide