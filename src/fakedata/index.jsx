import {GrHomeRounded, GrHistory} from "react-icons/gr";
import {FaDollarSign, FaGamepad} from "react-icons/fa";
import {BsFillCollectionPlayFill, BsChevronDown, BsFire, BsYoutube, BsFlag} from "react-icons/bs";
import {MdOutlineVideoLibrary, MdOutlineOndemandVideo, MdOutlineWatchLater, MdSettings, MdOutlineFeedback} from "react-icons/md";
import {BiLike, BiMovie, BiNews, BiHelpCircle} from "react-icons/bi";
import {RiMusicFill} from "react-icons/ri";
import { TbMapPinShare, TbBrandYoutubeKids } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { SiYoutubestudio, SiYoutubemusic } from "react-icons/si";

import poster_photo_1 from '../assets/image/poster-1.jpg'
import poster_photo_2 from '../assets/image/poster-2.jpg'
import poster_photo_3 from '../assets/image/poster-3.jpg'
import poster_photo_4 from '../assets/image/poster-4.jpg'

import video_1 from '../assets/video/fenerbahce-video-1.mp4'
import video_2 from '../assets/video/fenerbahce-video-2.mp4'
import video_3 from '../assets/video/cukur-video-1.mp4'
import video_4 from '../assets/video/cukur-video-2.mp4'
import video_5 from '../assets/video/devlet-video.mp4'
import { Link } from "react-router-dom";



const linkdata1 = [
    {
        icon1: <GrHomeRounded fontSize={18}/>,
        title1: <Link className="link" to="/">Home</Link>
    },
    {
        icon1: <FaDollarSign fontSize={18}/>,
        title1: <Link className="link" to="/shorts">Shorts</Link>
    },
    {
        icon1: <BsFillCollectionPlayFill fontSize={18}/>,
        title1: <Link className="link" to="">Subscriptions</Link>
    },
]
const linkdata2 = [
    {
        icon2: <MdOutlineVideoLibrary fontSize={18}/>,
        title2: <Link className="link" to="">Library</Link>
    },
    {
        icon2: <GrHistory fontSize={18}/>,
        title2: <Link className="link" to="">History</Link>
    },
    {
        icon2: <MdOutlineOndemandVideo fontSize={18}/>,
        title2: <Link className="link" to="">Your videos</Link>
    },
    {
        icon2: <MdOutlineWatchLater fontSize={18}/>,
        title2: <Link className="link" to="/watchlater">Watch later</Link>
    },
    {
        icon2: <BiLike fontSize={18}/>,
        title2: <Link className="link" to="">Liked videos</Link>
    },
    {
        icon2: <BsChevronDown fontSize={18}/>,
        title2: <Link className="link" to="">Show more</Link>
    },
]


const linkdata3 = [
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link className="link" to="">Simplearn</Link>
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link className="link" to="">Tepkikolik</Link>
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link className="link" to="">Literat</Link>
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link className="link" to="">Easy Tutorials</Link>
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link className="link" to="">CBC Sport</Link>
    },
]

const linkdata4 = [
    {
        icon3: <BsFire fontSize={18}/>,
        title4: <Link className="link" to="">Trending</Link>
    },
    {
        icon3: <RiMusicFill fontSize={18}/>,
        title4: <Link className="link" to="">Music</Link>
    },
    {
        icon3: <BiMovie fontSize={18}/>,
        title4: <Link className="link" to="">Movies</Link>
    },
    {
        icon3: <TbMapPinShare fontSize={18}/>,
        title4: <Link className="link" to="">Live</Link>
    },
    {
        icon3: <FaGamepad fontSize={18}/>,
        title4: <Link className="link" to="">Gaming</Link>
    },
    {
        icon3: <BiNews fontSize={18}/>,
        title4: <Link className="link" to="">News</Link>
    },
    {
        icon3: <GiTrophyCup fontSize={18}/>,
        title4: <Link className="link" to="">Sports</Link>
    },
]

const linkdata5 = [
    {
        icon5: <BsYoutube color='red' fontSize={18}/>,
        title5: <Link className="link" to="">Youtube Premium</Link>
    },
    {
        icon5: <SiYoutubestudio color='red' fontSize={18}/>,
        title5: <Link className="link" to="">Youtube Studio</Link>
    },
    {
        icon5: <SiYoutubemusic color='red' fontSize={18}/>,
        title5: <Link className="link" to="">Youtube Movies</Link>
    },
    {
        icon5: <TbBrandYoutubeKids color='red' fontSize={18}/>,
        title5: <Link className="link" to="">Youtube Kids</Link>
    }
]


const linkdata6 = [
    {
        icon6: <MdSettings fontSize={18}/>,
        title6: <Link className="link" to="">Settings</Link>
    },
    {
        icon6: <BsFlag fontSize={18}/>,
        title6: <Link className="link" to="">Report history</Link>
    },
    {
        icon6: <BiHelpCircle fontSize={18}/>,
        title6: <Link className="link" to="">Help</Link>
    },
    {
        icon6: <MdOutlineFeedback fontSize={18}/>,
        title6: <Link className="link" to="">Send feedback</Link>
    }
]

const videoData = [
    {
        id: 1,
        status: true,
        video: video_1,
        poster: poster_photo_1,
        video_name: "Fenerbahce haberleri",
        viewers: 100,
        time: "2 hours ago",
        category: "FENERBAHCE"
    },
    {
        id: 2,
        status: true,
        video: video_2,
        poster: poster_photo_2,
        video_name: "Fenerbahce gundemi",
        viewers: 125,
        time: "2 hours ago",
        category: "FENERBAHCE"
    },
    {
        id: 3,
        status: true,
        video: video_3,
        poster: poster_photo_3,
        video_name: "Cukur 4 Bolum",
        viewers: 56,
        time: "2 hours ago",
        category: "CUKUR"
    },
    {
        id: 4,
        status: true,
        video: video_4,
        poster: poster_photo_4,
        video_name: "Cukur Yangin Yeri",
        viewers: 113,
        time: "2 hours ago",
        category: "CUKUR"
    },
    {
        id: 5,
        status: true,
        video: video_5,
        poster: poster_photo_4,
        video_name: "Cukur Yangin Yeri",
        viewers: 113,
        time: "2 hours ago",
        category: "TBMM"
    },
    {
        id: 6,
        status: true,
        video: video_1,
        poster: poster_photo_1,
        video_name: "Fenerbahce haberleri",
        viewers: 100,
        time: "2 hours ago",
        category: "FENERBAHCE"
    },
    {
        id: 7,
        status: true,
        video: video_2,
        poster: poster_photo_2,
        video_name: "Fenerbahce gundemi",
        viewers: 125,
        time: "2 hours ago",
        category: "FENERBAHCE"
    },
    {
        id: 8,
        status: true,
        video: video_3,
        poster: poster_photo_3,
        video_name: "Cukur 4 Bolum",
        viewers: 56,
        time: "2 hours ago",
        category: "CUKUR"
    },
    {
        id: 9,
        status: true,
        video: video_4,
        poster: poster_photo_4,
        video_name: "Cukur Yangin Yeri",
        viewers: 113,
        time: "2 hours ago",
        category: "CUKUR"
    },
    {
        id: 10,
        status: true,
        video: video_5,
        poster: poster_photo_4,
        video_name: "Cukur Yangin Yeri",
        viewers: 113,
        time: "2 hours ago",
        category: "TBMM"
    },
    {
        id: 11,
        status: true,
        video: video_4,
        poster: poster_photo_4,
        video_name: "Cukur Yangin Yeri",
        viewers: 113,
        time: "2 hours ago",
        category: "CUKUR"
    },
    {
        id: 12,
        status: true,
        video: video_5,
        poster: poster_photo_4,
        video_name: "Cukur Yangin Yeri",
        viewers: 113,
        time: "2 hours ago",
        category: "TBMM"
    },
]


export {linkdata1, linkdata2, linkdata3, linkdata4, linkdata5, linkdata6, videoData};