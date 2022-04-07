import React from "react";
import { NavLink } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
import styles from "./Cards.module.css";
import {addToCart} from "../../redux/actions"



const Card = ({
  id,
  title,
  img,
  vote_average,
  price,
}) => {

   let dispatch = useDispatch();

  function addCart(e){
    e.preventDefault();
    dispatch(addToCart(id))
  } 
  return (
    // <div className={styles.eachCard}>
    //   <img
    //     src={img}
    //     className={styles.poster}
    //     width="auto"
    //     height="350px"
    //     alt="Poster"
    //   />
    //   <div className={styles.info}>
    //     <h3>{title}</h3>
    //     <p>{vote_average} ⭐</p>
    //     <p>US$ {price}</p>
    //     <div className={styles.buttons}>
    //       <NavLink to={`/movies/${id}`}>
    //         <button>View Details</button>
    //       </NavLink>
    //       <NavLink to={`/cart`}>
    //         <button>Add To Cart</button>
    //       </NavLink>
    //     </div>
    //   </div>
    // </div>

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
              <h3>{title}</h3>
              <p>{vote_average} ⭐</p>
              <p>US$ {price}</p>
              <div>
                <NavLink  to={`/movies/${id}`}>
                  <button className={styles.buttons}>View Details</button>
                </NavLink>
               {/*Aca no quiero que me lleve al carrito sino que solo añada la peli a el carrito*/}
                <button className={styles.buttons} onClick={e => addCart(e)} >Add To Cart</button>
            </div>
            </div>
          </div>
        </div>
  );
};

export default Card;
