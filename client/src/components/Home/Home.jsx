import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActors,
  getMovies,
  getGenres,
  filterYears,
  filterGenres,
  orderMovies,
  clearMovieById,
  getCountries,
  getCartDB,
  getUserOrders,
  addToCart
} from "../../redux/actions";
import Slider from "../Slider/Slider";
import CardSmart from "../Card/CardSmart";
import styles from "./Home.module.css";
import Paginate from "../Paginate/Paginate";
import SideBar from "../NavBar/SideBar";
import LoadScreen from "../Loading/LoadScreen";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const Home = () => {
  let dispatch = useDispatch();
  let [, setOrder] = useState("");
  const allMovies = useSelector((state) => state.movies);
  const userLogged = useSelector((state) => state.user);
  let cartDB = useSelector((state) => state.cartDB);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(12);
  const [loadScreen, setLoadScreen] = useState(true);
  const lastMovie = currentPage * moviesPerPage;
  const firstMovie = lastMovie - moviesPerPage;
  const currentMovie = allMovies.slice(firstMovie, lastMovie);

  useEffect(() => {
    dispatch(getMovies()).then(() => setLoadScreen(false));
    dispatch(getGenres());
    dispatch(getActors());
    dispatch(getCountries());
    dispatch(clearMovieById());
    if(userLogged) {
      dispatch(getUserOrders(userLogged.id))
      cartDB.forEach((e) => {
        dispatch(addToCart(e.MovieId));
      });
    }
  }, []);

  const handleYears = (e) => {
    e.preventDefault();
    if (e.target.value === "Year") {
      dispatch(getMovies());
      setCurrentPage(1);
      window.scrollTo(0, 0);
    } else {
      dispatch(filterYears(e.target.value));
      setCurrentPage(1);
      window.scrollTo(0, 0);
    }
  };

  const handleGenres = (e) => {
    e.preventDefault();
    if (e.target.value === "Genre") {
      dispatch(getMovies());
      setCurrentPage(1);
      window.scrollTo(0, 0);
    } else {
      dispatch(filterGenres(e.target.value));
      setCurrentPage(1);
      window.scrollTo(0, 0);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getMovies());
    setCurrentPage(1);
    window.scrollTo(0, 0);
  };

  const handleOrder = (o) => {
    o.preventDefault();
    if (o.target.value === "") {
      dispatch(getMovies());
      setCurrentPage(1);
      window.scrollTo(0, 0);
    } else {
      dispatch(orderMovies(o.target.value));
      setOrder(o.target.value);
      setCurrentPage(1);
      window.scrollTo(0, 0);
    }
  };

  const paginate = (pgNumber) => {
    setCurrentPage(pgNumber);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    const totalMovies = allMovies.length;
    const nextPage = currentPage + 1;
    const complete = currentPage * 12;
    if (complete > totalMovies) return;
    else {
      setCurrentPage(nextPage);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    const prevPage = currentPage - 1;
    if (prevPage <= 0) return;
    else {
      setCurrentPage(prevPage);
      window.scrollTo(0, 0);
    }
  };

  if (loadScreen) return <LoadScreen />;
  return (
    <div>
      <NavBar currentPage={setCurrentPage}/>
      <div className={styles.home}>
        <SideBar
          handleOrder={handleOrder}
          handleYears={handleYears}
          handleGenres={handleGenres}
          handleClick={handleClick}
        />
        <CardSmart currentMovie={currentMovie} />
        <div className={styles.containerPaginado}>
          <div className={styles.paginado}>
            <Paginate
              moviesPerPage={moviesPerPage}
              allMovies={allMovies.length}
              paginate={paginate}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          </div>
<div>
 <Footer/> 
</div>

        </div>
      </div>
    </div>
  );
};

export default Home;
