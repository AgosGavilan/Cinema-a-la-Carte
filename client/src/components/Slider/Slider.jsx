import React, {useState, useEffect} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import "./Slider.scss";
import {sliderData} from "./data.js"

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    useEffect(() => {
        setCurrentSlide(0);
    },[]);

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
            sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <div>
                                <div className='img'>
                                <img src={slide.image} alt='' /* className='img' */ />
                                </div>
                                <div className="content">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    <button className="--btn --btn-primary">Get Start</button>
                                </div>
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