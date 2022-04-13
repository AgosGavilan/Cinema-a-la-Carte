import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from "./LogIn.module.css"

const LogIn = () => {

const {loginWithRedirect} = useAuth0();


  return (
    <button 
    onClick={() => loginWithRedirect() }
    className={styles.login}
    >
        LogIn
    </button>
  )
}

export default LogIn