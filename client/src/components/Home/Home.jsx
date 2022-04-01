import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {getActors, getMovies, getGenres, filterYears, filterGenres, orderMovies} from "../../redux/actions"
import Filters from "../Filters/Filters";
import Ordering from "../Ordering/Ordering";
import Slider from "../Slider/Slider";
import CardSmart from '../Card/CardSmart'
import styles from "./Home.module.css"

const Home = () => {

    let dispatch = useDispatch()
    let [, setOrder] = useState("")

    useEffect(() => {
        dispatch(getMovies())
        dispatch(getGenres())
        dispatch(getActors())
    }, [])

    const handleYears = (e) => {
        e.preventDefault();
        if(e.target.value === "Years") {
          dispatch(getMovies())
          //   setCurrentPage(1)
        }
        else {
          dispatch(filterYears(e.target.value));
        //   setCurrentPage(1)
        }
      };
    
      const handleGenres = (e) => {
        e.preventDefault();
        if(e.target.value === "Genres") {
          dispatch(getMovies())
        }
        else {
        dispatch(filterGenres(e.target.value));
        // setCurrentPage(1)
        }
      };
    
      const handleClick = (e) => {
        e.preventDefault();
        dispatch(getMovies());
        // setCurrentPage(1)
      };

      const handleOrder = o => {
        o.preventDefault();
        if (o.target.value === "") {
            dispatch(getMovies());
            // setCurrentPage(1)
        }
        else {
            dispatch(orderMovies(o.target.value))
            setOrder(o.target.value)
            // setCurrentPage(1)
        }
    } 

return (
    <div className={styles.home}>
        <Slider />
        <Filters handleGenres={handleGenres} handleYears={handleYears} handleClick={handleClick}/>
        <Ordering handleOrder={handleOrder}/>
        <CardSmart />
    </div>
)
}

export default Home