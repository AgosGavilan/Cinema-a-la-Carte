import React from "react";
import { NavLink } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
import styles from "./Cards.module.css";
import {addToCart} from "../../redux/actions"
import Swal from "sweetalert2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar 
} from "@fortawesome/free-solid-svg-icons";


const Card = ({
  id,
  title,
  img,
  vote_average,
  price,
}) => {

   let dispatch = useDispatch();
   let cart = useSelector((state) => state.cart)

   let searchCart = cart.find(e => e.id === id)

  function addCart(e){
    e.preventDefault();
    if(searchCart) {
      Swal.fire({
        title: "Movie Already In Cart",
        icon: "warning",
        position: "center",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    }
    else {
      dispatch(addToCart(id))
    }
  } 
  return (

    <div className={styles.container}> {/* container vendria a ser eachCard */}
          <div className={styles.front}> {/*Le agregue un div mas, en este caso para lo que se va a ver adelante (la imagen) */}
            <img
              src={img}
              className={styles.poster}
              width="225px"
              height="350px"
              alt="Poster"
            />
          </div>
          <div className={styles.back}> {/*Este div es para lo que se va a ver atras */}
            <div className={styles.inner}>
              <h3 className={styles.title}>{title}</h3>
              <p>{vote_average} <FontAwesomeIcon icon={faStar} /></p>
              <p>US$ {price}</p>
              <div>
                <NavLink  to={`/movies/${id}`}>
                  <button className={styles.buttons}>View Details</button>
                </NavLink>
               {/*Aca no quiero que me lleve al carrito sino que solo añada la peli a el carrito*/}
                <button 
                className={searchCart ? styles.inCartBtn : styles.buttons} 
                onClick={e => addCart(e)} >{searchCart ? "In Cart" : "Add To Cart"}</button>
            </div>
            </div>
          </div>
        </div>
  );
};

export default Card;
