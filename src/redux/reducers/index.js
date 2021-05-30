import { combineReducers } from "redux";
import { ActionTypes } from "../contants/actionTypes";
import { productReducer, selectedProductReducer } from "./postReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
});

export default reducers;