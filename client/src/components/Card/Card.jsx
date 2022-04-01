import React from "react";
import { NavLink } from 'react-router-dom'

const Card = ({id, title, release_date, overview, image, original_language, vote_average, adult, genres, actors}) => {
    

    return (
        <div>
            <img src={image} width="400px" height="250px" alt=""/>
            <h3>{title}</h3>
            <p>{original_language}</p>
            <p>{vote_average}</p>
            <p>{release_date}</p>
            <p>{overview}</p>
            <p>{adult}</p>
            <p>{genres}</p>
            <p>{actors}</p>
            <NavLink to={`/detail/${id}`}>
                <span>Leer más</span>
            </NavLink>
            <NavLink to={`/carrito`}>
                <span>Agregar al carrito</span>
            </NavLink>

        </div>
    )
}

export default Card