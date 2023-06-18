import React, {useState} from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FaShare } from "react-icons/fa";


const IconSideVideo = () => {

    let [like, setLike] = useState(15);
    let [dislike, setDislike] = useState(2);

    let [likeActive, setLikeActive] = useState(false);
    let [disLikeActive, setDisLikeActive] = useState(false);

    const likef = () => {
      if(likeActive){
          setLikeActive(false);
          setLike(like - 1);
      }else{
          setLikeActive(true);
          setLike(like + 1);
          if(disLikeActive){
              setDisLikeActive(false);
              setLike(like + 1);
              setDislike(dislike - 1)
          }
      }
    }

    const dislikef = () => {
      if(disLikeActive){
        setDisLikeActive(false);
        setDislike(dislike - 1);
      }else{
        setDisLikeActive(true);
        setDislike(dislike + 1);
        if(likeActive){
            setLikeActive(false);
            setDislike(dislike + 1);
            setLike(like - 1)
        }
    }
    }


  return (
    <div className='icon-side'>
            <div className='icon-btn-side'>
                <button onClick={likef}><AiFillLike size={22}/></button>
                <p>{like}</p>
            </div>
            <div className='icon-btn-side'>
                <button onClick={dislikef}><AiFillDislike size={22}/></button>
                <p>{dislike}</p>
            </div>
            <div className='icon-btn-side'>
                <button><BiCommentDetail size={20}/></button>
                <p>300</p>
            </div>
            <div className='icon-btn-side'>
                <button><FaShare size={20}/></button>
                <p>Share</p>
            </div>
            <div className='add-side'>
               <img src="https://picsum.photos/id/237/200/300" alt="" />
            </div>
        </div>
  )
}

export default IconSideVideo