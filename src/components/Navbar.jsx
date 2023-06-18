import React, { useContext } from 'react';
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import User from './User';
import { VideoContext } from '../context/VideoContext';
import { Link } from 'react-router-dom';


const Navbar = () => {

const {setVideos ,videoData ,handleOpenSidebar} = useContext(VideoContext);

const handleSearch = (e) => {
    let search = e.target.value;
    setVideos(videoData.filter(v => v.video_name.toUpperCase().match(search.toUpperCase())))
}

  return (
    <nav>
        <div className='left-nav'>
            <button onClick={handleOpenSidebar}>
                <FaBars color='black' fontSize={19}/>
            </button>
            <Link to='/'>
                 <img src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png" alt="" />
            </Link>
        </div>
        <div className='center-nav'>
            <div className='center-search'>
                <input type="text" placeholder='Search' onChange={handleSearch} />
                <button className='center-search-btn'>
                    <BsSearch fontSize={20}/>
                </button>
            </div>
               <button className='center-voice-btn'>
                    <MdKeyboardVoice fontSize={22}/>
               </button>
        </div>
        <div className="right-nav">
            <button><RiVideoAddLine fontSize={20}/></button>
            <button><IoNotificationsOutline fontSize={20}/></button>
            <User/>
        </div>
    </nav>
  )
}

export default Navbar