import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Cards.module.css";

const Card = ({
  id,
  title,
  release_date,
  overview,
  img,
  original_language,
  vote_average,
  adult,
  genres,
  actors,
  price,
}) => {
  return (
    <div className={styles.eachCard}>
      <img
        src={img}
        className={styles.poster}
        width="auto"
        height="350px"
        alt="Poster"
      />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{vote_average} ⭐</p>
        <p>US$ {price}</p>
        <div className={styles.buttons}>
          <NavLink to={`/movies/${id}`}>
            <button>View Details</button>
          </NavLink>
          <NavLink to={`/cart`}>
            <button>Add To Cart</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
