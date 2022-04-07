import React, {useState} from "react";
import {removeFromCart} from "../../../redux/actions";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";

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
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.overview}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        {/* <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div> */}
        <button onClick={e => remove(e)}>
          
          
        
            Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem