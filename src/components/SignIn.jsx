import React, { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const {googleSignIn, user, facebookSignIn} = UserAuth();

    const navigate = useNavigate()
  
    const handleGoogleSubmit = async () => {
        try{
            await googleSignIn();
            
        }catch(err){
          console.log(err);
        }
    }
  
    const handleFacebookSubmit = async () => {
      try{
        await facebookSignIn();
        
    }catch(err){
      console.log(err);
    }
    }
  
  
  
    useEffect(() => {
      if(user != null){
        navigate("/")
      }
    }, [user])

  return (
    <div className='sign-in-main'>
        <h2>Sign in</h2>
        <div>
            <GoogleButton onClick={handleGoogleSubmit}/>
            <button onClick={handleFacebookSubmit}>Sign in with Facebook</button>
        </div>
    </div>
  )
}

export default SignIn