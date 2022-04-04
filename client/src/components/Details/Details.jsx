import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { details } from "../../redux/actions";
import image from '../../assets/background-popcorn-film-wallpaper-preview.jpg'
import s from "./Details.module.css"

const Details = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const movieDetail = useSelector(state => state.details)

    React.useEffect(() => {
        dispatch(details(id))
    }, [dispatch, id])

    return (
        <div>
            {/* <h1>{movieDetail.title}</h1> *
            <img src={movieDetail.img ? movieDetail.img : image} alt={`${movieDetail.name}'s`}/> *
            <p>Vote: {movieDetail.vote_average}</p>
            <p>Genres: {movieDetail.Genres?.map(g => g.name).join(' | ')}</p> *
            <p>Release: {movieDetail.release_date}</p> *
            <p>Description: {movieDetail.overview}</p> *
            <p>Price: u$d{movieDetail.price}</p> *
            <p>Actores: {movieDetail.Actors?.map(a => a.name).join(', ')}</p>
            <button>Add to cart</button> */}

<div className={s.wrapper}>
  <div className={s.card}>
    <div className={s.product_left}>
        <NavLink to="/home" className={s.nav}>
          <span className={s.navspan}>⇦</span>
        </NavLink>
      <div className={s.header}>
        <h1>{movieDetail.title}</h1>
        <h2>{movieDetail.Genres?.map(g => g.name).join(' | ')}</h2>
      </div>
      
      <div className={s.product_main}>
        <div className={s.focus}>
          <span>Description</span>
          <span>Review</span>
        </div>
        <p>{movieDetail.overview}</p>
        <p>{movieDetail.Actors?.map(a => a.name).join(', ')}</p>
        <p>Release: {movieDetail.release_date}</p>
      </div>
      
      <div className={s.product_details}>
        
        
        <div className={s.product_total}>
          <h3>Total Price</h3>
          <p>$ {movieDetail.price}</p>
        </div>
      </div>
      
      <div className={s.product_btns}>
        <a href="#" className={s.product_add}>Add To Cart</a>
      </div>
    </div>
    <div className={s.product_right}>
      <img src={movieDetail.img ? movieDetail.img : image} alt="" />
    </div>
  </div>
</div>
        </div>
    )
}

export default Details