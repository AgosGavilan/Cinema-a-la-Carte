/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMovies } from "../../redux/actions/index"

import {
  faAngleLeft,
  faAngleRight,
  faUser,
  faCartShopping,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
//import Cart from "./Cart/index";
// import hola from "./hola.png"


export default function NavBar() {
  const allMoviesBackup = useSelector((state) => state.moviesBackUp);
  const allMovies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getMovies());
  }



  return (
    <div className="nav">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <h1 className="btnHome">Cinema a la Carte</h1>
      </Link>
      <SearchBar />
      <Link to="/form">
        <FontAwesomeIcon className="movieIcon" icon={faClapperboard} />
      </Link>
      {/* <Link to="/"> */}
      <FontAwesomeIcon className="user" icon={faUser} />
      {/* </Link> */}
      <Link to="/cart">
        <FontAwesomeIcon className="cart" icon={faCartShopping} />
      </Link>
      {
        allMovies.length !== allMoviesBackup.length && <button onClick={handleClick} className="backButton">
        <FontAwesomeIcon className="back" icon={faAngleLeft} />
      </button> 
      
      }
    </div>
  );
}
