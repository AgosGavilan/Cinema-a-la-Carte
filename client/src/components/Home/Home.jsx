import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {getActors, getMovies, getGenres, filterYears, filterGenres, orderMovies} from "../../redux/actions"
import Filters from "../Filters/Filters";
import Ordering from "../Ordering/Ordering";
import Slider from "../Slider/Slider";
import CardSmart from '../Card/CardSmart'
import styles from "./Home.module.css"
import Paginate from "../Paginate/Paginate";

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
      
    const allMovies = useSelector((state) => state.movies);

    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(12);
    const lastMovie = currentPage * moviesPerPage;
    const firstMovie = lastMovie - moviesPerPage;
    const currentMovie = allMovies.slice(firstMovie, lastMovie);

    const paginate = (pgNumber) => {
        setCurrentPage(pgNumber);
      };
      
      const handleNext = () => {
        const totalMovies = allMovies.length;
        const nextPage = currentPage + 1;
        const complete = currentPage * 12;
        if (complete > totalMovies) return;
        else {
          setCurrentPage(nextPage);
        }
      }
    
      const handlePrev = () => {
        const prevPage = currentPage - 1;
        if (prevPage <= 0) return;
        else {
          setCurrentPage(prevPage);
        }
      }

  
      

return (
    <div className={styles.home}>
        <Slider />
        <Filters handleGenres={handleGenres} handleYears={handleYears} handleClick={handleClick}/>
        <Ordering handleOrder={handleOrder}/>
        <CardSmart />
           <div>
              {/* <Cards currentMovie={currentMovie} /> */}
            </div>
            <div className="containerPaginado">
              <div className="paginado">
                <button className="numberButton" onClick={handlePrev}>
                  Previous
                </button>
                <div className="textPage">
                  {/* <p className="pageNumber">
                    {currentPage} of {totalPage}{" "}
                  </p> */}
                <Paginate
                moviesPerPage={moviesPerPage}
                allMovies={allMovies.length}
                paginate={paginate}
              />
                </div>
                <button className="numberButton" onClick={handleNext}>
                  Next
                </button>
              </div>

    </div>
)
}

export default Home