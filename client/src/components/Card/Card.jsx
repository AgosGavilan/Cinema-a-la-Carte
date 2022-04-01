import React from "react";
import { NavLink } from 'react-router-dom'

const Card = ({id, title, release_date, overview, img, original_language, vote_average, adult, genres, actors, price}) => {
    

    return (
        <div>
            <img src={img} width="250px" height="350px" alt=""/>
            <h3>{title}</h3>
            <p>{vote_average}</p>
            <p>US$ {price}</p>
            {/* <p>{original_language}</p>
            <p>{release_date}</p>
            <p>{overview}</p>
            <p>{adult}</p>
            <p>{genres}</p>
            <p>{actors}</p> */}
            <NavLink to={`/detail/${id}`}>
                <span>View Details</span>
            </NavLink>
            <NavLink to={`/carrito`}>
                <span>Add To Cart</span>
            </NavLink>

        </div>
    )
}

export default Card