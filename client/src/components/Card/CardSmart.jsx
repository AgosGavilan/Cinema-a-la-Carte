import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions";
import Card from "./Card";
import img from '../../assets/background-popcorn-film-wallpaper-preview.jpg'

const CardSmart = () => {

    const dispatch = useDispatch()
    const allMovies = useSelector(state => state.movies)

    React.useEffect(() => {
         dispatch(getMovies())
    }, [dispatch])


    return (
        <div>
            {allMovies?.map(el => {
                return (<Card
                    key={el.id}
                    id={el.id}
                    img={el.img ? el.img : img}
                    title={el.title}
                    price={el.price}
                    genres={el.Genres?.map(g => g.name)}
                    release_date={el.release_date}
                    vote_average={el.vote_average}
                    overview={el.overview}
                    original_language={el.original_language}
                    adult={el.false}
                    actors={el.Actors?.map(a => a.name)}
                    />)
            })}

        </div>
    )
}

export default CardSmart