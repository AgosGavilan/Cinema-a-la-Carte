import { TYPES } from "./types"
import axios from "axios"

const URL = "http://localhost:3001"

export const getMovies = () => {
    return async dispatch => {
        try {
            const {data} = await axios.get(`${URL}/movies`)
            return dispatch({
                type: TYPES.GET_MOVIES, 
                payload: data})
        }
        catch(e) {
            console.log("error in getMovies", e)
        }
    }
}

export const details = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${URL}/movie/${id}`)
            return dispatch({
                type: TYPES.DETAILS,
                payload: data
            })
        } catch(e) {
            console.log('error in details', e)
        }
    }
}