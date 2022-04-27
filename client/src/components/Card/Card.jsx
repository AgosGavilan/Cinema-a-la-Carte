import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cards.module.css";
import { addToCart, addToCartDB } from "../../redux/actions";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

const Card = ({ id, title, img, vote_average, price }) => {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  let cartDB = useSelector((state) => state.cartDB);
  let searchCartDB = cartDB.find((e) => e.id === id);
  let searchCart = cart.find((e) => e.id === id);
  const { isAuthenticated } = useAuth0();
  let user = useSelector((state) => state.user)
  const allOrders = useSelector((state) => state.userOrders);
  let movielist = []
  let searchOrder = allOrders?.map((r) => r.Order_details?.map(r => movielist.push(r)));
  let findMovie = movielist?.find((m) => m.MovieId === id);

  function addCart(e) {
    e.preventDefault();
    if (findMovie) {
      Swal.fire({
        title: "Movie Already Purchased",
        icon: "warning",
        position: "center",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    }
    if (searchCart || searchCartDB) {
      Swal.fire({
        title: "Movie Already In Cart",
        icon: "warning",
        position: "center",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    } else {
      dispatch(addToCart(id));
    }
  }

  return (
    <div className={styles.container}>
      {" "}
      {/* container vendria a ser eachCard */}
      <div className={styles.front}>
        {" "}
        {/*Le agregue un div mas, en este caso para lo que se va a ver adelante (la imagen) */}
        <img
          src={img}
          className={styles.poster}
          width="225px"
          height="350px"
          alt="Poster"
        />
      </div>
      <div className={styles.back}>
        {" "}
        {/*Este div es para lo que se va a ver atras */}
        <div className={styles.inner}>
          <h3 className={styles.title}>{title}</h3>
          <p>
            {vote_average} <FontAwesomeIcon icon={faStar} />
          </p>
          <p>US$ {price}</p>
          <div>
            <NavLink to={`/movies/${id}`}>
              <button className={styles.buttons}>View Details</button>
            </NavLink>
            {/*Aca no quiero que me lleve al carrito sino que solo añada la peli a el carrito*/}
            <button
              className={
                searchCart || searchCartDB
                  ? styles.inCartBtn
                  : findMovie
                  ? styles.purchased
                  : styles.buttons
              }
              onClick={(e) => addCart(e)}
            >
              {searchCart || searchCartDB
                ? "In Cart"
                : findMovie
                ? "Purchased"
                : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
