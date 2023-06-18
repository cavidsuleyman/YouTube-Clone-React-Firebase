import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import ShortMain from './page/ShortMain';
import Protected from './components/Protected';
import HomeMain from './page/HomeMain';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoDetails from './components/VideoDetails';
import {VideoContext} from './context/VideoContext'
import { useRef, useState } from 'react';
import { videoData } from './fakedata';
import BlockVideo from './components/BlockVideo';


function App() {

  const [openSidebar, setOpenSidebar] = useState(false);
  const [videos, setVideos] = useState(videoData);
  const [isMute, setIsMute] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCommentBtn, setShowCommentBtn] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [sendComm, setSendComm] = useState("");
  const [writeComment, setWriteComment] = useState([]);

  const videoRef = useRef(null);
  const bufferRef = useRef(null);
  const progressRef = useRef(null);

  const toggleMute = () => {
    setIsMute(!isMute);
    videoRef.current.muted = !isMute;
  };

  const handleOpenSidebar = () => {
      setOpenSidebar(!openSidebar)
  }

  const deactiveProduct = (i) => {
    videos[i].status = false;
    setVideos([...videos])
  } 
  const activeProduct = (i) => {
    videos[i].status = true;
    setVideos([...videos])
  } 

 return (
    <VideoContext.Provider value={{writeComment, setWriteComment,sendComm, setSendComm,showEmoji, setShowEmoji,showCommentBtn, setShowCommentBtn, deactiveProduct,activeProduct,isPlaying,setIsPlaying,progressRef,bufferRef, isMute, setIsMute, videoRef, toggleMute, videos,setVideos,videoData,openSidebar, setOpenSidebar, handleOpenSidebar}}>
       <BrowserRouter>
       <Navbar/>
            <Routes>
                  <Route path='/signin' element={<SignIn/>}/>
                  <Route path='/' element={<Protected><HomeMain/></Protected>}/>
                  <Route path='/shorts' element={<ShortMain/>}/>
                  <Route path='details/:id' element={<VideoDetails/>}/>
                  <Route path='/watchlater' element={<BlockVideo/>}/>
              </Routes>
        </BrowserRouter>
    </VideoContext.Provider>
  );
}

export default App;
