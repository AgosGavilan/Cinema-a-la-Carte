import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
// import { getMovies } from "../../redux/actions/index";
import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "../LogIn/LogIn";
import AdminPanel from "../AdminPanel/AdminPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import logo from "../../assets/Cine.jpg";
import logoResponsive from "../../assets/cineicon.ico";
import { useState, useEffect } from "react";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    let menuIcon = document.querySelector(".menu-icon");
    let menu = document.querySelector(".navbar-menu");

    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("is-active-hamburguer");
      menu.classList.toggle("is-active-menu");
    });
  }, [isActiveMenu]);

  // const handleClickMenu = () => {
  //   let aux = isActiveMenu === false ? true : false;
  //   setIsActiveMenu(aux);
  // };

  return (
    <div className="nav">
      <div className="divHome">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="responsive-logo">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <img src={logoResponsive} alt="logo" />
        </Link>
      </div>

      {/* <Link to="/home" style={{ textDecoration: "none" }}> */}
      <SearchBar />
      {/* </Link> */}

      <div className="navbar-menu">
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

        <AdminPanel />

        <Link to="/cart" className="link">
          <FontAwesomeIcon className="cart" icon={faCartShopping} />
          {cart.length === 0 ? (
            ""
          ) : (
            <span
              id="cart_menu_num"
              data-action="cart-can"
              className="badge rounded-circle"
            >
              {cart.length}
            </span>
          )}
        </Link>
      </div>
      {/* {
        allMovies.length !== allMoviesBackup.length && <button onClick={handleClick} className="backButton">
        <FontAwesomeIcon className="back" icon={faAngleLeft} />
      </button> 
      
      } */}
      <div className="menu-icon ">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default NavBar;
