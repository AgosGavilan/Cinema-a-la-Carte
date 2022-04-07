import React, {useState, useEffect} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./Slider.scss";
import {sliderData} from "./data.js"
import {getMovies} from "../../redux/actions/index"
import {NavLink} from "react-router-dom"

function Slider() {
    const allMovies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [currentSlide, setCurrentSlide] = useState(0);
    let sliderData = []
    sliderData.push(allMovies[0], allMovies[1], allMovies[2], allMovies[3], allMovies[4])
    const slideLength = sliderData.length;
    
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 6000;
    
    useEffect(() => {
        dispatch(getMovies());
        setCurrentSlide(0);
    },[]);

    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime)
    }


    useEffect(() => {
        if(autoScroll){
            auto();
        }
        return () => clearInterval(slideInterval)
    },[currentSlide]);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide -1 )
    }

    

  return (
    <div className='slider'>
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />        
        {
            sliderData?.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <div>
                                <div className='img'>
                                    <NavLink to={`/movies/${slide.id}`}>
                                <img src={slide.img} alt='Slide' className='img' />
                                </NavLink>
                                </div>
                                {/* <div className="content">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.overview}</p>
                                    <hr />
                                    <button className="--btn --btn-primary">Get Start</button>
                                </div> */}
                            </div>
                        )}
                    </div>
                )
            })
        }
    
    </div>
  )
}

export default Slider