import React, { useContext } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";
import { VideoContext } from '../context/VideoContext';



const WriteCommnet = () => {

    const {showEmoji, setShowEmoji, sendComm, writeComment, setWriteComment, setSendComm, setShowCommentBtn, showCommentBtn} = useContext(VideoContext)

    const handleEmoji = () => {
        setShowEmoji(!showEmoji)
    }

    const handleSendComment = async () => {
        if(sendComm.length > 0){
            await writeComment.push({
                comment: sendComm,
                statusUser: 2,
                chatID: 0
            });
            await setWriteComment([...writeComment]);
            setSendComm('');
        }
    } 

  return (
    <div className='write-comment-input'>
        <div className='write-input-side'>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            <input 
            type="text" 
            placeholder='Add a comment...'
            onFocus={() => setShowCommentBtn(true)}
            value={sendComm}
            onChange={(e) => setSendComm(e.target.value)}
            />
        </div>
        <div className={showCommentBtn ? "write-input-btn" : "hidden-write-input"}>
            <button onClick={handleEmoji} className='emoji-btn'>
                <BsEmojiSmile/>
            </button>
            {
                showEmoji ? 
                <div className='emoji-box'>
                <EmojiPicker searchDisabled={false} />
                </div>
                :
                ""
            }
            <div className='comment-send-btn'>
                <button onClick={() => setShowCommentBtn(!true)}>Cancel</button>
                <button onClick={handleSendComment}>Comment</button>
            </div>
        </div>
    </div>
  )
}

export default WriteCommnet