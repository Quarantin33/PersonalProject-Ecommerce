import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getUser } from '../store/slices/user/thunk';

const Profile = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch( getUser() );
    }, [dispatch])

    console.log("Estoy en profile")
    
  return (
    <div>Profile</div>
  )
}

export default Profile