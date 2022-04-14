import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from "./LogOut.module.css"
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions';

const LogOut = () => {

const {logout} = useAuth0();
const dispatch = useDispatch();

const handleLogout = () => {
  logout({returnTo: window.location.origin})
  dispatch(logoutUser())
}

  return (
    <button 
    onClick={handleLogout}
    className={styles.logout}
    >
        Logout
    </button>
  )
}

export default LogOut