import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx/CartItem";
import styles from "./Cart.module.css";
import empty from "../../assets/empty-cart.png";
import NavBar from "../NavBar/NavBar";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div>
      <NavBar />
      <div className={styles.box}>
        {cart.length > 0 ? (
          <div className={styles.cart__items}>
            <div className={styles.title}>
              <h3>Shopping Cart</h3>
            </div>
            <div className={styles.scroll}>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className={styles.cart__summary}>
              <h4 className={styles.summary__title}>Cart Summary</h4>
              <div className={styles.summary__price}>
                <span>TOTAL: ({totalItems} items)</span>
                <span>$ {totalPrice}</span>
              </div>
              <button className={styles.summary__checkoutBtn}>Checkout</button>
            </div>
          </div>
        ) : (
          <div className={styles.img_div}>
            <img src={empty} alt="carrito vacio" className={styles.img_cart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
