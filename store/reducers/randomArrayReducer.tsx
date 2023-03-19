import { GET_RANDOM_ARRAY, SAMPLE_ERROR } from "../types";

const initialState = {
    sample: [],
    loading: true,
};

const randomArrayReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RANDOM_ARRAY:
            return {
                ...state,
                sample: action.payload,
                loading: false,
            };

        case SAMPLE_ERROR:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default randomArrayReducer;