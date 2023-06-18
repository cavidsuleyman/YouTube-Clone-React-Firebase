import React, {useContext} from 'react'
import { VideoContext } from '../context/VideoContext';
import HoverVideoPlayer from 'react-hover-video-player';
import HoverOverlay from './HoverOverlay';
import { BiAddToQueue } from "react-icons/bi";
import Sidebar from './Sidebar';


const BlockVideo = () => {

    const {videoRef, isMute, videos, activeProduct} = useContext(VideoContext);
 
    return (
<div className="main">
    <Sidebar/>
    <div className='container-video'>
        <section className='videos-side-main'>
            {
            videos.map((v, i) => !v.status && (
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
                        <div className='videos-title-channel'>
                            <img src={v.poster} alt="" />
                        </div>
                        <div className='videos-title-desc'>
                            <h2>{v.video_name}</h2>
                            <p>{v.category}</p>
                            <span>{v.viewers} - {v.time}</span>
                        </div>
                        <div className='videos-title-block'>
                            <button onClick={() => activeProduct(i)} className='video-block-btn'>
                                <BiAddToQueue/>
                            </button>
                        </div>
                    </div>
                </div>
            ))
        } 
    </section>
    </div> 
</div>
    )
}

export default BlockVideo

