import {
    GET_RANDOM_ARRAY, SET_ALGORITHM, SAMPLE_ERROR
} from "../types";

export const getRandomArray = (arraySize) => async (dispatch) => {
    try {
        const randomArray = [];
        for (let i = 0; i < arraySize; i++) {
            randomArray.push(Math.floor(Math.random() * arraySize));
        }
        dispatch({
            type: GET_RANDOM_ARRAY,
            // payload: [1, 2, 3, 4, 5, 6],
            payload: randomArray,
        });
    } catch (error) {
        dispatch({
            type: SAMPLE_ERROR,
            payload: "error message",
        });
    }
};

export const setAlgorithm = (algorithm) => async (dispatch) => {
    try {
        dispatch({
            type: SET_ALGORITHM,
            payload: algorithm,
        });
    } catch (error) {
        dispatch({
            type: SAMPLE_ERROR,
            payload: "error message",
        });
    }
};
