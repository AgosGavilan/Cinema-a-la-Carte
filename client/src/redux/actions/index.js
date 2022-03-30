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

export function getMovieByTitle(title) {
    return async function (dispatch) {
      try {
        let json = await axios.get(
          `${URL}/movies?title=${title}`
        );
        return dispatch({ type: "GET_TITLE_MOVIE", payload: json.data });
      } catch (error) {
        //console.log(error.message);
        alert("Sorry, not Movie found with that title");
      }
    };
  }