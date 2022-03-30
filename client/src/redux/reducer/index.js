import { TYPES } from "../actions/types"

const initialState = {
    movies: [],
    details: []

}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case TYPES.GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case TYPES.DETAILS:
            return {
                ...state,
                details: action.payload
            }
        
        default:
            return {
                ...state
            }
    }
}

export default rootReducer