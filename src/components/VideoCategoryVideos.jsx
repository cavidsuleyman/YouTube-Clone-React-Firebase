import React, {useContext} from 'react'
import { VideoContext } from '../context/VideoContext';
import HoverVideoPlayer from 'react-hover-video-player';


const VideoCategoryVideos = () => {

    const {videoRef, isMute, videos} = useContext(VideoContext);
 
    return (
        <section className='videos-side-details-main'>
            {
            videos.map((v, i) => (
                <div key={i} className='videos-box-details'>
                        <div className='videos-side-details'>
                            <HoverVideoPlayer
                            className='hover-video-player'
                            videoSrc={v.video}
                            pausedOverlay={
                                <>
                                <img 
                                src={v.poster} 
                                alt=''
                                className='video-poster-details'
                                /> 
                                <p className='current-time-details'>15:23</p>
                                </>
                            }
                            volume={0}
                            muted={isMute}
                            videoRef={videoRef}
                            style={{cursor: "pointer"}}
                            />
                        </div>
                        
                    <div className='videos-title-details'>
                        <div className='videos-title-desc-details'>
                            <h2>{v.video_name}</h2>
                            <p>{v.category}</p>
                            <span>{v.viewers} - {v.time}</span>
                        </div>
                    </div>
                </div>
            ))
        } </section>
    )
}

export default VideoCategoryVideos

