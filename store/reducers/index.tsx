import { combineReducers } from "redux";
import randomArrayReducer from "./randomArrayReducer";
import setAlgorithmReducer from "./setAlgorithmReducer";

export default combineReducers({
    randomArray: randomArrayReducer,
    algorithm: setAlgorithmReducer,
});