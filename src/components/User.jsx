import React, {useState} from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { BsBagCheck } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { GrHelp } from "react-icons/gr"
import { UserAuth } from '../context/AuthContext';

const User = () => {

const profile = true;
const [openProfile, setOpenProfile] = useState(false)

const {user, logOut} = UserAuth();
    const navigate = useNavigate();
    
    const handleLogOut = async () => {
        try{
            await logOut();
            navigate("/signin")
        }catch(err){
            console.log(err);
        }
    }

  return (
    <>
         <div className='profile'>
        {profile ? (
          <>
            <button className='img' onClick={() => setOpenProfile(!openProfile)}>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="User Account" />
            </button>

            {openProfile && (
              <div className='openProfile boxItems'>
                <div className='image'>
                    <div className='img'>
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="User Account" />
                    </div>
                  <div className='text'>
                    <h4>{user?.displayName}</h4>
                    <label htmlFor=''>{user?.email}</label>
                  </div>
                </div>
                <Link className='link' to='/account'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box' onClick={handleLogOut}>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}

export default User