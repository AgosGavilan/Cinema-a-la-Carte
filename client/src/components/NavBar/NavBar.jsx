import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { getLoggedUser } from "../../redux/actions";

const NavBar = ({ currentPage }) => {
  const cart = useSelector((state) => state.cart);
  const userLogged = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [input, setInput] = useState({
    nickname: user.nickname || null,
    name: user.given_name || null,
    lastName: user.family_name || null,
  })
  useEffect(() => {
    if (user) {
      dispatch(getLoggedUser(user.email, input));
    }
  }, []);

  return (
    <div className="nav">
      <div className="divHome">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <SearchBar currentPage={currentPage} />
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
      {userLogged ? userLogged.role === "SUPER_ROLE" || userLogged === "ADMIN_ROLE" ? <AdminPanel /> : "" : ""}

      <Link to="/cart" className="link">
        <FontAwesomeIcon className="cart" icon={faCartShopping} />
        {cart.length === 0 ? (
          ""
        ) : (
          <span
            id="cart_menu_num"
            data-action="cart-can"
            class="badge rounded-circle"
          >
            {cart.length}
          </span>
        )}
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
