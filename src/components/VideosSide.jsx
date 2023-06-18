import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { VideoContext } from '../context/VideoContext';
import HoverVideoPlayer from 'react-hover-video-player';
import HoverOverlay from './HoverOverlay';
import { ImBlocked } from "react-icons/im";


const VideosSide = () => {

    const {videoRef, isMute, videos, deactiveProduct} = useContext(VideoContext);
 
    return (
        <section className='videos-side-main'>
            {
            videos.map((v, i) => v.status && (
                <div key={i} className='videos-box'>
                    
                        <div className='videos-side'>
                       
                            <HoverVideoPlayer
                            videoSrc={v.video}
                            pausedOverlay={
                                <>
                                <img 
                                src={v.poster} 
                                alt=''
                                className='video-poster'
                                /> 
                                <p className='current-time'>15:23</p>
                                </>
                            }
                            hoverOverlay={
                               <HoverOverlay/>
                            }
                            volume={1}
                            muted={isMute}
                            videoRef={videoRef}
                            style={{cursor: "pointer"}}
                            />
                        </div>
                        
                    <div className='videos-title'>
                     <Link to={`details/${v.id}`}>
                        <div className='videos-title-channel'>
                            <img src={v.poster} alt="" />
                        </div>
                    </Link>
                        <div className='videos-title-desc'>
                            <h2>{v.video_name}</h2>
                            <p>{v.category}</p>
                            <span>{v.viewers} - {v.time}</span>
                        </div>
                        <div className='videos-title-block'>
                            <button onClick={() => deactiveProduct(i)} className='video-block-btn'>
                                <ImBlocked/>
                            </button>
                        </div>
                    </div>
                </div>
            ))
        } </section>
    )
}

export default VideosSide

