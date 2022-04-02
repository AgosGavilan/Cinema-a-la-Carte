import { TYPES } from "./types"
import axios from "axios"

const URL = "https://proyect-ecommerce.herokuapp.com/api"

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
            const {data} = await axios.get(`${URL}/movies/${id}`)
            return dispatch({
                type: TYPES.DETAILS,
                payload: data
            })
        } catch(e) {
            console.log('error in details', e)
        }
    }
}


export const orderMovies = (order) => {
    return {
        type: TYPES.ORDER_MOVIES, 
        payload: order
    }
}

export const filterGenres = (genre) => {
    return {
        type: TYPES.FILTER_GENRES, 
        payload: genre
    }
}

export const filterYears = (year) => {
    return {
        type: TYPES.FILTER_YEARS, 
        payload: year
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

export function getMovieByTitle(title) {
    return async function (dispatch) {
      try {
        let json = await axios.get(
          "https://proyect-ecommerce.herokuapp.com/api/search?name=" + title
        );
        return dispatch({ type: "GET_TITLE_MOVIE", payload: json.data });
      } catch (error) {
        //console.log(error.message);
        alert("Sorry, not Movie found with that title");
      }
    };
  }



