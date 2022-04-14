import React, { useEffect } from "react";
import s from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart } from "../../redux/actions";

const Description = ({movieDetail, id}) => {

    let cart = useSelector((state) => state.cart);
    let searchCart = cart.find((e) => e.id === movieDetail.id);
    const dispatch = useDispatch()

    function addCart(e) {
        e.preventDefault();
        if (searchCart) {
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
                className={searchCart ? s.product_incart : s.product_add}
                onClick={(e) => addCart(e)}
              >
                {searchCart ? "In Cart" : "Add To Cart"}
              </button>
            </div>
        </div>
    )
}

export default Description