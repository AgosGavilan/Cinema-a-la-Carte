import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx/CartItem";
import styles from "./Cart.module.css";
import empty from "../../assets/empty-cart.png";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import Checkout from "./Checkout"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = /* useSelector((state) => state.user) */ {id: 10};
  

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [idMp, setIdMp] = useState("");

  
console.log(user);
  const data = {
    userId: user.id,
    orderlines: cart
}

/* 
const urlBack = "https://proyect-ecommerce.herokuapp.com/api" */

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

  async function handleMp(){
    console.log(data);    
      let orden = await axios.post(`/api/orders`, data);
      console.log(orden.data)

      let info = await axios.get(`/api/mercadopago/${orden.data.id}`)


    setIdMp(info.data.id)
  }  

  console.log(idMp)
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
                <span>$ {Math.round(totalPrice * 100)/100}</span>
              </div>
              <button /* onClick={handleMp} */ className={styles.summary__checkoutBtn}>
                {<Checkout productos={cart} data={idMp}/>}
              </button>
              
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
