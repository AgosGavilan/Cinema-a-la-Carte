import { TYPES } from "../actions/types"

const initialState = {
    movies: [],
    actors: [],
    genres: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case TYPES.GET_MOVIES:
            return {
                ...state,
                movies: action.payload

            };
            case TYPES.POST_MOVIE:
                return {
                  ...state,                
                };
                case TYPES.GET_GENRES: 
                return {
                    ...state,
                    genres: action.payload
                };
                case TYPES.GET_ACTORS: 
                return {
                    ...state,
                    actors: action.payload
                };
                default:

            }
            case TYPES.GET_TITLE_MOVIE:
                
                return { ...state, movies: action.payload };
        
        default:

            return {
                ...state
            };
    }
}

export default rootReducer