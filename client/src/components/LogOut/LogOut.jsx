import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from "./LogOut.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, addToCartDB } from '../../redux/actions';

const LogOut = ({loading, setLoading}) => {
  const user = useSelector((state) => state.userLo);
  let cart = useSelector((state) => state.cart);
  let idMovies = cart.map((e) => e.id);

const {logout} = useAuth0();
const dispatch = useDispatch();

const handleLogout = () => {
  setLoading(true)
  console.log(idMovies)
  dispatch(addToCartDB(idMovies, user.id));
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


/* import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from "./LogOut.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, addToCartDB } from '../../redux/actions';


const LogOut = ({loading, setLoading}) => {
  const user = useSelector((state) => state.user);
  let cart = useSelector((state) => state.cart);
  let idMovies = cart.map((e) => e.id);

const {logout} = useAuth0();
const dispatch = useDispatch();


const handleLogout = () => {
  setLoading(true)
  dispatch(addToCartDB(idMovies, user.id));
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

export default LogOut */