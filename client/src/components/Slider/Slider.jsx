import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./Slider.scss";
import {
  getMovies,
  getLoggedUser,
  getCartDB,
  addToCart,
} from "../../redux/actions/index";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import LoadScreen from "../Loading/LoadScreen";
import NavBar from "../NavBar/NavBar";

const Slider = () => {
  const allMovies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  let [loading, setLoading] = useState(true);
  let sliderData = [];
  sliderData.push(
    allMovies[0],
    allMovies[1],
    allMovies[2],
    allMovies[3],
    allMovies[4]
  );
  const slideLength = sliderData.length;
  const userLogged = useSelector((state) => state.user);
  let cartDB = useSelector((state) => state.cartDB);

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 6000;

  useEffect(() => {
    dispatch(getMovies()).then(setLoading(false));
    if (userLogged) {
      dispatch(getLoggedUser(userLogged.email));
    }
    setCurrentSlide(0);
  }, []);

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    dispatch(getMovies());
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  if (loading) return <LoadScreen />;
  return (
    <div>
      <NavBar />
      <div className="landing">
        <div className="welcome">
          <h1 className="titleLand">Welcome to Cinéma á la Carte</h1>
          <h4 className="descriptionLand">
            Your own movie library where you can adquire any of the latest films
            and watch it all the times you want! <br /> <br /> Are you ready for
            this journey?
          </h4>
          <NavLink to="/home">
            <FontAwesomeIcon className="playBtn" icon={faPlay} />
          </NavLink>
        </div>
        <div className="slider">
          <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
          {sliderData?.map((slide, index) => {
            return (
              <div
                className={index === currentSlide ? "slide current" : "slide"}
                key={index}
              >
                {index === currentSlide && (
                  <div className="img">
                    <NavLink to={`/movies/${slide.id}`}>
                      <img
                        src={slide.img}
                        alt="Slide"
                        className="posterSlide"
                      />
                    </NavLink>
                  </div>
                )}
              </div>
            );
          })}
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
