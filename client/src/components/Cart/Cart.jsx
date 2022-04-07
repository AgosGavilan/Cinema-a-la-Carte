import React from 'react'
import { useSelector } from "react-redux";
import CartItem from './CartItem.jsx/CartItem';
import styles from './Cart.module.css'


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div>
        <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
    
  )
}

export default Cart