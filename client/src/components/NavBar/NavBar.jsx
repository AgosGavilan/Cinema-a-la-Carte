/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMovies } from "../../redux/actions/index";
import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "../LogIn/LogIn";
import AdminPanel from "../AdminPanel/AdminPanel";
import {
  faAngleLeft,
  faAngleRight,
  faUser,
  faCartShopping,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import logo from "../../assets/Cine.jpg";
//import Cart from "./Cart/index";
// import hola from "./hola.png"

const NavBar = () => {
  const allMoviesBackup = useSelector((state) => state.moviesBackUp);
  const allMovies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleClick = () => {
    dispatch(getMovies());
  };

  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav">
      <div className="divHome">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <SearchBar />
      </Link>
      <Link to="/form">
        <FontAwesomeIcon className="movieIcon" icon={faClapperboard} />
      </Link>
      {isAuthenticated ? (
        <Link to="/user">
          <FontAwesomeIcon className="user" icon={faUser} />
        </Link>
      ) : (
        <LogIn />
      )}
      <AdminPanel/>
      
      <Link to="/cart">
        <FontAwesomeIcon className="cart" icon={faCartShopping} />
        {cart.length === 0 ? "" : 
          <span id="cart_menu_num" data-action="cart-can" class="badge rounded-circle">{cart.length}</span>
        }
      </Link>
      {/* {
        allMovies.length !== allMoviesBackup.length && <button onClick={handleClick} className="backButton">
        <FontAwesomeIcon className="back" icon={faAngleLeft} />
      </button> 
      
      } */}
    </div>
  );
};

export default NavBar;
