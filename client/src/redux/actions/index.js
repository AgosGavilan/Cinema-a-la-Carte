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

export const postMovie = (newMovie) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL}/movie`, newMovie)
            return dispatch({
                type: TYPES.POST_MOVIE,
                payload: data
            })
        } catch(e) {
            console.log("error in postMovie", e)
        }
    }
}


export const getGenres= () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/genres`)
            return dispatch({
                type: TYPES.GET_GENRES,
                payload: data
            })
        } catch(e) {
            console.log("error in getGenres", e)
        }
    }
}

export const getActors= () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/actors`)
            return dispatch({
                type: TYPES.GET_ACTORS,
                payload: data
            })
        } catch(e) {
            console.log("error in getActors", e)
        }
    }
}