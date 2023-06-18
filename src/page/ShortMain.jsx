import React from 'react'
import ShortSide from '../components/ShortSide';
import Sidebar from '../components/Sidebar';

const ShortMain = () => {
  return (
    <div className='main'>
      <Sidebar/>
        <ShortSide/>
    </div>
  )
}

export default ShortMain