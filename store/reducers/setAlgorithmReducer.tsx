import { SET_ALGORITHM, SAMPLE_ERROR } from "../types";

const initialState = {
    algorithm: "Bubble Sort",
    loading: true,
};

const setAlgorithmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALGORITHM:
            return {
                ...state,
                algorithm: action.payload,
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
}

export default setAlgorithmReducer;