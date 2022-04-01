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
            <h1>{movieDetail.title}</h1>
            <img src={movieDetail.img ? movieDetail.img : image} alt={`${movieDetail.name}'s`} width="300px" height="150px"/>
            <p>Vote: {movieDetail.vote_average}</p>
            <p>Genres: {movieDetail.Genres?.map(g => g.name).join(' | ')}</p>
            <p>Release: {movieDetail.release_date}</p>
            <p>Description: {movieDetail.overview}</p>
            <p>Price: u$d{movieDetail.price}</p>
            <p>Actores: {movieDetail.Actors?.map(a => a.name).join(', ')}</p>
        </div>
    )
}

export default Details