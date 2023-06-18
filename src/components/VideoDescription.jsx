import React, {useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { VideoContext } from '../context/VideoContext';
import { AiFillLike, AiFillDislike, AiOutlineHeart } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";


const VideoDescription = () => {

    const [isSubs, setIsSubs] = useState(false)

    const {id} = useParams();

    const {videoData} = useContext(VideoContext)
  
    const product = videoData.find(product => product.id == id);
  
    const {poster, video_name, category} = product

  return (
    <div className='video-description-main'>
        <h2>{video_name}</h2>
        <div className='video-description-button'>
            <div className='video-description-channel'>
                <div className='channel-description'>
                    <img src={poster} alt="" />
                    <p>
                        {category}
                    </p>
                </div>
                {
                    isSubs ? 
                    <button className='unsubscribe-btn' onClick={() => setIsSubs(!isSubs)}>Subscribed</button>
                    :
                    <button className='subscribe-btn' onClick={() => setIsSubs(!isSubs)}>Subscribe</button>
                }
                
            </div>
            <div className='video-description-like'>
                <button><AiFillLike/></button>
                <button><AiFillDislike/></button>
                <button><FaShare/> Share</button>
                <button><HiDownload/> Download</button>
                <button><AiOutlineHeart/> Thanks</button>
                <button><BsThreeDots/></button>
            </div>
        </div>
    </div>
  )
}

export default VideoDescription