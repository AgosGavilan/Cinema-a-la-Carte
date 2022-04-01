import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { details } from "../../redux/actions";
import img from '../../assets/background-popcorn-film-wallpaper-preview.jpg'

const Details = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const movieDetail = useSelector(state => state.details)

    React.useEffect(() => {
        dispatch(details(id))
    }, [dispatch, id])

    return (
        <div>
            <h1>{movieDetail.name}</h1>
            <img src={movieDetail.image ? movieDetail : img} alt={`${movieDetail.name}'s`} width="300px" height="150px"/>
            <p>{movieDetail.rating}</p>
            <p>{movieDetail.genres}</p>
            <p>{movieDetail.released}</p>
            <p>{movieDetail.description}</p>
            <p>{movieDetail.platforms}</p>
        </div>
    )
}

export default Details