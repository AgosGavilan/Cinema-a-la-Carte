import React, { useEffect } from "react";
import s from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart, addToCartDB } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";

const Description = ({ movieDetail, id }) => {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  let cartDB = useSelector((state) => state.cartDB);
  let searchCartDB = cartDB.find((e) => e.id === movieDetail.id);
  let searchCart = cart.find((e) => e.id === movieDetail.id);
  const { isAuthenticated } = useAuth0();
  let allOrders = useSelector((state) => state.userOrders);
  let movielist = []
  let searchOrder = allOrders?.map((r) => r.Order_details?.map(r => movielist.push(r)));
  let findMovie = movielist?.find((m) => m.MovieId === movieDetail.id);
  console.log(findMovie)

  function addCart(e) {
    e.preventDefault();
    if (findMovie) {
      Swal.fire({
        title: "Movie Already Purchased",
        icon: "warning",
        position: "center",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    }
    else if (searchCart) {
      Swal.fire({
        title: "Movie Already In Cart",
        icon: "warning",
        position: "center",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    } else {
      dispatch(addToCart(movieDetail.id));
    }
  }

  return (
    <div>
      <div className={s.product_main}>
        <p>{movieDetail.overview}</p>
        <p>{movieDetail.Actors?.map((a) => a.name).join(", ")}</p>
        <p>Release: {movieDetail.release_date}</p>
      </div>

      <div className={s.product_details}>
        <div className={s.product_total}>
          <h3>Total Price</h3>
          <p>$ {movieDetail.price}</p>
        </div>
      </div>

      <div className={s.product_btns}>
        <button
          className={
            searchCart
              ? s.product_incart
              : findMovie
              ? s.product_purchased
              : s.product_add
          }
          onClick={(e) => addCart(e)}
        >
          {findMovie
            ? "Purchased"
            : searchCart
            ? "In Cart"
            : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default Description;
