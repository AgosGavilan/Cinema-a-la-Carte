import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Cards.module.css";

const Card = ({
  id,
  title,
  img,
  vote_average,
  price,
}) => {
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
              width="auto"
              height="350px"
              alt="Poster"
            />
          </div>
          <div className={styles.back}> {/*Este div es para lo que se va a ver atras */}
            <div className={styles.inner}>
              <h3>{title}</h3>
              <p>{vote_average} ⭐</p>
              <p>US$ {price}</p>
              <div className={styles.buttons}>
                <NavLink to={`/movies/${id}`}>
                  <button>View Details</button>
                </NavLink>
               {/*Aca no quiero que me lleve al carrito sino que solo añada la peli a el carrito*/}
                <button>Add To Cart</button>
            </div>
            </div>
          </div>
        </div>
  );
};

export default Card;
