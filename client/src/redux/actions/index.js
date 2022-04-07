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
            const { data } = await axios.post(`${URL}/movies`, newMovie)
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
     /*  try {
        let json = await axios.get(
          "https://proyect-ecommerce.herokuapp.com/api/search?name=" + title
        );
        return dispatch({ type: "GET_TITLE_MOVIE", payload: json.data });
      } catch (error) {
        //console.log(error.message);
        alert("Sorry, not Movie found with that title");
      } */
      let json = await axios.get(
        "https://proyect-ecommerce.herokuapp.com/api/search?name=" + title
      );
      
      if(json.data[0].name){
          /* return dispatch({type: "GET_TITLE_MOVIE", payload:json.data[0].Movies}) */
          
          var arr = [];
         json.data.forEach(el => {
            for(let i=0; i<= el.Movies.length; i++){
                if(el.Movies[i] !== undefined){
                    arr.push(el.Movies[i])
                }
            }
         })
         console.log(arr);
         return dispatch({type: TYPES.GET_TITLE_MOVIE, payload: arr})
      }
      else {
        return dispatch({ type: TYPES.GET_TITLE_MOVIE, payload: json.data });
      }
    };
  }

  export const clearMovieById = () => {
    return (dispatch) => {
      dispatch({ type: TYPES.CLEAR_MOVIE });
    };
  };

  export const modifyMovie = (movie) => {
    return async (dispatch) => {
      try {
        const { data } = axios.put(`${URL}/...`, movie);
        dispatch({
          type: TYPES.MODIFY_MOVIE,
          payload: data,
        });
        console.log(data);
      } catch (e) {
        console.log("Error in modifyMovie");
        console.log(e);
      }
    };
  };
  
  export const deleteMovie = (id) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.delete(
          `${URL}/.../${id}`
        );
        dispatch({ type: TYPES.DELETE_MOVIE, payload: data });
      } catch (error) {
        console.log("error in deleteMovie", error);
      }
    };
  };


