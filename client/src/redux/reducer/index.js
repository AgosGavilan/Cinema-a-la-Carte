import { TYPES } from "../actions/types";

const initialState = {
  movies: [],
  moviesBackUp: [],
  genres: [],
  actors: [],
  details: [],
  cart: [],
  currentItem: null,
  reviews: [],
  users: [],
  user: {}

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        moviesBackUp: action.payload,
      };
    case TYPES.DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case TYPES.ORDER_MOVIES: {
      let movieSort;
      if (action.payload === "AtoZ") {
        movieSort = state.movies.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          else return 0;
        });
      }
      if (action.payload === "ZtoA") {
        movieSort = state.movies.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          else return 0;
        });
      }
      if (action.payload === "HighRating") {
        movieSort = state.movies.sort((a, b) => {
          if (a.vote_average > b.vote_average) return -1;
          if (a.vote_average < b.vote_average) return 1;
          else return 0;
        });
      }
      if (action.payload === "LowRating") {
        movieSort = state.movies.sort((a, b) => {
          if (a.vote_average > b.vote_average) return 1;
          if (a.vote_average < b.vote_average) return -1;
          else return 0;
        });
      }

      return {
        ...state,
        movies: movieSort,
        moviesBackUp: movieSort,
      };
    }


    case TYPES.POST_MOVIE:
      return {
        ...state,
      };
    case TYPES.GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case TYPES.GET_ACTORS:
      return {
        ...state,
        actors: action.payload,
      };

    case TYPES.GET_TITLE_MOVIE:
      return { ...state, movies: action.payload };

    case TYPES.FILTER_GENRES:
      const allMovies = state.moviesBackUp;
      let filterMovieGenres = allMovies.filter((e) =>

        e.Genres?.find((g) => g.name === action.payload)

      );
      return {
        ...state,
        movies: filterMovieGenres,
      };

    case TYPES.FILTER_YEARS:
      const allMovies1 = state.moviesBackUp;
      let filterMovieYears = allMovies1.filter((e) =>

        e.release_date.includes(action.payload)

      );
      return {
        ...state,
        movies: filterMovieYears,
      };

    case TYPES.ADD_TO_CART:


      //checkear si el item ya esta en el carritp
      /*       const inCart = state.cart(item => item.id === action.payload.id ? true : false); */
      const item = state.movies.find(movie => movie.id === action.payload.id);
      const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);

      return {
        ...state,
        cart: inCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }]
        //         : item)
      }
    // return {
    //   ...state,
    //   cart: [...state.cart, item] /* inCart
    //     ? state.cart.map((item) =>
    //       item.id === action.payload.id
    //         ? { ...item, qty: item.qty + 1 }
    //         : item
    //     )
    //     : [...state.cart, { ...item, qty: 1 }], */
    // };


    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };

    case TYPES.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    case TYPES.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    case TYPES.CLEAR_MOVIE:
      return {
        ...state,
        details: []
      }
    
    case TYPES.MODIFY_MOVIE:
      return {
        ...state
      }

    case TYPES.DELETE_MOVIE:
      return {
        ...state
      }

    case TYPES.POST_REVIEW:
      return {
        ...state,
      }

    case TYPES.GET_ALL_REVIEWS:
      return {
        ...state,
        reviews: [...state.review, action.payload]
      }

    case TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload
     }

    case TYPES.DELETE_USER:
      return {
      ...state
      }

    case TYPES.POST_USER:
      return {
        ...state,
        user: action.payload
      }

    case TYPES.POST_LOGIN:
      return {
        ...state,                
      }

  case TYPES.PUT_ROLE:
    return {
      ...state,
    }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
