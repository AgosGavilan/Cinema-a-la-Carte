import React, {useState} from "react";
import {removeFromCart} from "../../../redux/actions";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import trash from "../../../assets/47-471196_icon-trash-png-font-awesome-trash-o-transparent.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

const CartItem = ({item}) => {
    let dispatch = useDispatch();

    function remove(e){
        e.preventDefault();
        dispatch(removeFromCart(item.id))
      }
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.img}
        alt={item.title}
      />
        <div className={styles.div_tipre}>
          <p className={styles.details__title}>{item.title}</p>
        </div>
        <div className={styles.div_tipre}>
          <p className={styles.details__price}>$ {item.price}</p>
        </div>
      <div className={styles.cartItem__actions}>
        <button onClick={e => remove(e)} className={styles.trash}>
          {/* <img src={trash} alt="delete" width="25px" height="25px" /> */}
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  )
}

export default CartItem