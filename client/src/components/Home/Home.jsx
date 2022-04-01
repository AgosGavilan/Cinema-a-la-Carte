import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getActors, getMovies, getGenres} from "../../redux/actions"
import Filters from "../Filters/Filters";
import Ordering from "../Ordering/Ordering";
import Slider from "../Slider/Slider";

const Home = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies())
        dispatch(getGenres())
        dispatch(getActors())
    }, [])
return (
    <div>
        <Slider />
        <Filters />
        <Ordering />
    </div>
)
}

export default Home