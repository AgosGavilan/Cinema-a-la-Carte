import { TYPES } from "./types"
import axios from "axios"

const URL = "http://localhost:3001"

export const getMovies = () => {
return async dispatch => {
    try {
        const {data} = await axios.get(`${URL}/movies`)
        return dispatch({type: TYPES.GET_MOVIES, payload: data})
    }
    catch(e) {
        console.log("error in getMovies", e)
    }
}
}

export const orderMovies = (order) => {
    return {type: TYPES.ORDER_MOVIES, payload: order}
}

export const filterGenres = (genre) => {
    return {type: TYPES.FILTER_GENRES, payload: genre}
}

export const filterYears = (year) => {
    return {type: TYPES.FILTER_YEARS, payload: year}
}