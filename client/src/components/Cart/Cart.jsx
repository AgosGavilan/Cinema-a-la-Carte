
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem.jsx/CartItem.jsx";
import styles from "./Cart.module.css";
import empty from "../../assets/empty-cart.png";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { emptyCart } from "../../redux/actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  //console.log("esto tengo en el carrito: ", cart)
  const user = useSelector((state) => state.user);
  const { isAuthenticated } = useAuth0();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const data = {
    userId: user.id,
    orderlines: cart,
  };
  console.log("soy data: ", data)

  const dispatch = useDispatch()

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

  async function handleMp() {
    if(!isAuthenticated) {
      Swal.fire({
        title: "Please, login before checkout",
        icon: "warning",
        position: "center",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      })
    } else {
      let orden = await axios.post(`/api/orders`, data);
  
      let info = await axios.get(
        `/api/mercadopago/generate-url/${orden.data.id}`
      );
  
      window.location.href = info.data.init_point;

      dispatch(emptyCart(user.id))
    }
  }

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
                <span>$ {Math.round(totalPrice * 100) / 100}</span>
              </div>
              <button
                onClick={handleMp}
                className={styles.summary__checkoutBtn}
              >
                Checkout
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
