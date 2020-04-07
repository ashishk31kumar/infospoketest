import { GET_ALL_MOVIELIST } from "../actions/types";
const initialState = {
    movieList: []
}
const moveListReducer = (state = initialState, action) => {
    switch (action.type) {


        case GET_ALL_MOVIELIST:
            return {
                ...state,
                movieList: action.payload,
            };
        default:
            return state
    }
}

export default moveListReducer;