import React, {useContext, useState} from 'react';
import { linkdata1, linkdata2, linkdata3, linkdata4, linkdata5, linkdata6 } from '../fakedata/index';
import { BsChevronDown} from "react-icons/bs";
import { VideoContext } from '../context/VideoContext';

const Sidebar = () => {

  const [link1, setLink1] = useState(linkdata1);
  const [link2, setLink2] = useState(linkdata2);
  const [link3, setLink3] = useState(linkdata3);
  const [link4, setLink4] = useState(linkdata4);
  const [link5, setLink5] = useState(linkdata5);
  const [link6, setLink6] = useState(linkdata6);

  const {openSidebar} = useContext(VideoContext)

    return (
        <div className={openSidebar ? "res-sidebar" : "sidebar"}>
            <ul className='sidebar-links'>
                <div className='border-side'>
                  {
                    link1.map((v, i) => (
                      <li key={"link1" + i}>{v.icon1}
                          <a href="#">{v.title1}</a>
                      </li>
                    ))
                  }
                </div>
                <div style={{display: openSidebar ? "none" : "block"}} className='border-side'>
                  {
                    link2.map((v,i) => (
                      <li key={"link2" + i}>{v.icon2}
                          <a href="#">{v.title2}</a>
                      </li>
                    ))
                  }
                </div>
                <div style={{display: openSidebar ? "none" : "block"}} className='border-side'>
                    <p>Subscription</p>
                    {
                      link3.map((v,i) => (
                        <li key={"link3" + i}><img src={v.img} alt=""/>
                            <a href="#">{v.title3}</a>
                        </li>
                      ))
                    }
                    <li><BsChevronDown fontSize={18}/>
                        <a href="#">Show more</a>
                    </li>
                </div>
                <div style={{display: openSidebar ? "none" : "block"}} className='border-side'>
                    <p>Explore</p>
                    {
                      link4.map((v,i) => (
                        <li key={"link4" + i}>{v.icon3}
                            <a href="#">{v.title4}</a>
                        </li>
                      ))
                    }
                </div>
                <div style={{display: openSidebar ? "none" : "block"}} className='border-side'>
                    <p>More from YouTube</p>
                    {
                      link5.map((v,i) => (
                        <li key={"link5" + i}>{v.icon5}
                            <a href="#">{v.title5}</a>
                        </li>
                      ))
                    }
                </div>
                <div style={{display: openSidebar ? "none" : "block"}} className='border-side'>
                  {
                      link6.map((v,i) => (
                        <li key={"link6" + i}>{v.icon6}
                            <a href="#">{v.title6}</a>
                        </li>
                      ))
                  }
                </div>
            </ul>
        </div>
    )
}

export default Sidebar
