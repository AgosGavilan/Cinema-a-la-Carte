import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import LoadScreen from "../Loading/LoadScreen";
import { details, addToCart, getAllReviews } from "../../redux/actions";
import poster from "../../assets/poster.jpg";
import Swal from "sweetalert2"
import NavBar from "../NavBar/NavBar.jsx"
import s from "./Details.module.css";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loadScreen, setLoadScreen] = useState(true);
  const movieDetail = useSelector((state) => state.details);
  let cart = useSelector((state) => state.cart);
  let searchCart = cart.find((e) => e.id === movieDetail.id);
  const allReviews = useSelector(state => state.reviews)

  useEffect(() => {
    dispatch(details(id)).then(() => setLoadScreen(false))
    dispatch(getAllReviews(id))
  }, [dispatch, id]);

  if (loadScreen) return <LoadScreen />;

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
          <NavBar />
    <div>
      <div className={s.wrapper}>
        <div className={s.card}>
          <div className={s.product_left}>
            <NavLink to="/home" className={s.nav}>
              <span className={s.navspan}>⇦</span>
            </NavLink>
            <div className={s.header}>
              <h1>{movieDetail.title}</h1>
              <h2>{movieDetail.Genres?.map((g) => g.name).join(" | ")}</h2>
            </div>

            <div className={s.product_main}>
              <div className={s.focus}>
                <span>Description</span>
                <span>Review ({allReviews.length})</span>
              </div>
              <p>{movieDetail.overview}</p>
              <p>{movieDetail.Actors?.map((a) => a.name).join(", ")}</p>
              <p>Release: {movieDetail.release_date}</p>
            </div>

            <div className={s.product_details}>
              <div className={s.product_total}>
                <h3>Total Price</h3>
                <p>US$ {movieDetail.price}</p>
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
          <div className={s.product_right}>
          <img src={movieDetail.img ? movieDetail.img : poster} className={s.backImg} alt="" />
            <img src={movieDetail.img ? movieDetail.img : poster} className={s.frontImg} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Details;
