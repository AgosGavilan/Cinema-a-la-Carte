import { TYPES } from "./types"
import axios from "axios"

//const URL = "https://proyect-ecommerce.herokuapp.com/api"

export const getMovies = () => {
    return async dispatch => {
        try {

            const { data } = await axios.get(`/api/movies`)
            return dispatch({
                type: TYPES.GET_MOVIES,
                payload: data
            })
        }
        catch (e) {
            console.log("error in getMovies", e)
        }
    }
}


export const details = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/movies/${id}`)
            return dispatch({
                type: TYPES.DETAILS,
                payload: data
            })
        } catch (e) {
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
            const { data } = await axios.post(`/api/movies`, newMovie)
            return dispatch({
                type: TYPES.POST_MOVIE,
                payload: data
            })
        } catch (e) {
            console.log("error in postMovie", e)
        }
    }
}

export const getGenres = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/genres`)
            return dispatch({
                type: TYPES.GET_GENRES,
                payload: data
            })
        } catch (e) {
            console.log("error in getGenres", e)
        }
    }
}

export const getActors = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/actors`)
            return dispatch({
                type: TYPES.GET_ACTORS,
                payload: data
            })
        } catch (e) {
            console.log("error in getActors", e)
        }
    }
}

export function getMovieByTitle(title) {
    return async function (dispatch) {

        let json = await axios.get(
            "/api/search?name=" + title
        );

        if (json.data[0].name) {
            /* return dispatch({type: "GET_TITLE_MOVIE", payload:json.data[0].Movies}) */

            var arr = [];
            json.data.forEach(el => {
                for (let i = 0; i <= el.Movies.length; i++) {
                    if (el.Movies[i] !== undefined) {
                        arr.push(el.Movies[i])
                    }
                }
            })
            console.log(arr);
            return dispatch({
                type: TYPES.GET_TITLE_MOVIE,
                payload: arr
            })
        }
        else {
            return dispatch({
                type: TYPES.GET_TITLE_MOVIE,
                payload: json.data
            });
        }
    }
}

export const clearMovieById = () => {
    return (dispatch) => {
        dispatch({
            type: TYPES.CLEAR_MOVIE
        });
    };
};


export const modifyMovie = (movie) => {
    return async (dispatch) => {
        try {
            //console.log(movie);
            //console.log(movie.id)
            const { data } = axios.put(`/api/movies/${movie.id}`, movie);
            dispatch({
                type: TYPES.MODIFY_MOVIE,
                payload: data,
            });
            //console.log(movie);
        } catch (e) {
            console.log("Error in modifyMovie");
            //console.log(e);
        }
    };
};

export const deleteMovie = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(
                `/api/movies/delete/${id}`
            );
            dispatch({ 
                type: TYPES.DELETE_MOVIE, 
                payload: data });
        } catch (error) {
            console.log("error in deleteMovie", error);
        }
    };
};

export const addToCartDB = (itemId, userId) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.post(`/api/shopping-cart/${userId}`, {
          MovieId: itemId
        });
        dispatch({
          type: TYPES.ADD_TO_CART_DB,
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };

  export const getCartDB = (userId) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`/api/shopping-cart/${userId}`);
        dispatch({
          type: TYPES.GET_TO_CART_DB,
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };  

export const addToCart = (itemId) => {
    return {
        type: TYPES.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: TYPES.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const adjustQty = (itemId, value) => {
    return {
        type: TYPES.ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: TYPES.LOAD_CURRENT_ITEM,
        payload: {
            id: item
        }
    }
}

export const emptyCart = (userId) => {
    return async dispatch => {
        try {
            const { data } = axios.delete(`https://proyect-ecommerce.herokuapp.com/api/shopping-cart/items/${userId}`)
            return dispatch({
                type: TYPES.EMPTY_CART,
                payload: data
            })
        } catch(e) {
            console.log("error en empty cart: ", e)
        }
    }
}

export const postReview = (review, userId) => { //review es lo que tengo que mandar por body (review.text, review.vote)
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`/api/reviews/${userId}`, review)
            return dispatch({
                type: TYPES.POST_REVIEW,
                payload: data
            })

        } catch (e) {
            console.log('error en postReview', e)
        }
    }

}


export const getAllReviews = (idMovie) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`api/reviews/reviewsMovie/${idMovie}`)
            return dispatch({
                type: TYPES.GET_ALL_REVIEWS,
                payload: data
            })
        } catch (e) {
            console.log('error en getAllReview', e)
        }
    }
}

export const deleteReview = (reviewId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`api/reviews/delete/${reviewId}`)
            return dispatch({
                type: TYPES.DELETE_REVIEW,
                payload: data
            })
        } catch(e) {
            console.log("error en delete review: ", e)
        }
    }
}

export const getUsers = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get("/api/users")
            return dispatch({
                type: TYPES.GET_USERS,
                payload: data
            })
        }
        catch (e) {
            console.log("error in getUsers", e)
        }
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            console.log(id)
            const { data } = await axios.delete(
                "api/users/delete", {data: id}
            );
            dispatch({
                type: TYPES.DELETE_USER,
                payload: data
            });
        } catch (error) {
            console.log("error in deleteUser", error);
        }
    };
};

export const getLoggedUser = (LoggedUser, userInfo) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`/api/users/${LoggedUser}`, userInfo)
            return dispatch({
                type: TYPES.GET_LOGGED_USER,
                payload: data
            })
        } catch (e) {
            console.log("error in getLoggedUser", e)
        }
    }
}

export const modifyRole = (role) => {
    return async (dispatch) => {
        try {
            const { data } = axios.put("api/users/set-role", role);
            dispatch({
                type: TYPES.PUT_ROLE,
                payload: data,
            });
        } catch (e) {
            console.log("Error in modifyRole");
            console.log(e);
        }
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ 
            type: TYPES.LOGOUT_USER 
          });
      };
}

export const verifyEmail = (email) => {
    return async (dispatch) => {
        try {
          const { data } = axios.put(`api/users/email-verify/${email}`);
          dispatch({
            type: TYPES.VERIFY_EMAIL,
            payload: data,
          });
           } catch (e) {
          console.log("Error in verifyEmail");
          console.log(e);
        }
      };
}

export const resetPassword = (id) => {
    return async (dispatch) => {
        try {
            console.log(id)
          const { data } = await axios.delete(
            "api/users/delete-password", {data: id}
          );
          dispatch({ 
              type: TYPES.RESET_PASSWORD, 
              payload: data });
        } catch (error) {
          console.log("error in resetPassword", error);
        }
    };
}

export const modifyProfile = (email, infoUser) => {
    return async (dispatch) => {
        try {
          const { data } = axios.put(`api/users/${email}`, infoUser);
          dispatch({
            type: TYPES.VERIFY_EMAIL,
            payload: data,
          });
           } catch (e) {
          console.log("Error in modifyProfile");
          console.log(e);
        }
      };
}

export const getOrders = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get("/api/orders")
            return dispatch({
                type: TYPES.GET_ORDERS,
                payload: data
            })
        }
        catch (e) {
            console.log("error in getOrders", e)
        }
    }
}

export const getUserOrders = (userId) => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`api/orders/${userId}`)
            return dispatch({
                type: TYPES.GET_USER_ORDERS,
                payload: data
            })
        }
        catch (e) {
            console.log("error in getUserOrders", e)
        }
    }
}

export const getCountries = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get("api/countries")
            return dispatch({
                type: TYPES.GET_COUNTRIES,
                payload: data.countries
            })
        }
        catch (e) {
            console.log("error in getCountries", e)
        }
    }
}

export const callCartDB = (val) => {
    return {
      type: TYPES.CALL_CART_DB,
      payload: val,
    };
  };
