import React from 'react'

import LogIn from '../LogIn/LogIn'

import LogOut from '../LogOut/LogOut'
import Profile from '../Profile/Profile'
import { useAuth0 } from '@auth0/auth0-react'

const User = () => {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      {isAuthenticated 
      ?  <LogOut/> 
      :  <LogIn/>
      }
    <Profile/>
    </div>
  )
}

export default User