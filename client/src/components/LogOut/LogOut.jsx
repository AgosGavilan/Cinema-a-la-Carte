import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from "./LogOut.module.css"

const LogOut = () => {

const {logout} = useAuth0();


  return (
    <button 
    onClick={() => logout({returnTo: window.location.origin}) }
    className={styles.logout}
    >
        Logout
    </button>
  )
}

export default LogOut