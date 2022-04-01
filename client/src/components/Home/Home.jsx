import React, { useState} from "react";
import { useSelector } from "react-redux";

import {getMovies} from "../../redux/actions"
import Slider from "../Slider/Slider";
import Paginate from "../Paginate/Paginate";

const Home = () => {

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
    <div>
            <Slider />
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
      
    
    </div>
)
}

export default Home