import { TYPES } from "../actions/types";

const initialState = {
  movies: [],
  moviesBackUp: [],
  genres: [],
  actors: [],
  details: [],
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

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
