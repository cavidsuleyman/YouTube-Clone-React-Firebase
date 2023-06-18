import React from 'react'
import WriteCommnet from './WriteCommnet'
import WriteCommentSide from './WriteCommentSide'

const CommentSide = () => {
  return (
    <div className='comment-main-side'>
       <WriteCommnet/>
       <WriteCommentSide/>
    </div>
  )
}

export default CommentSide