import React from 'react'
import NavBar from '../NavBar/NavBar'
import LogIn from '../LogIn/LogIn'
import styles from "./User.module.css"
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
    <NavBar />
    <div className={styles.user}>
      <div className={styles.profileContainer}>
      <Profile/>
      {isAuthenticated 
      ?  <LogOut/> 
      :  <LogIn/>
      }
      </div>
    </div>
    </div>
  )
}

export default User