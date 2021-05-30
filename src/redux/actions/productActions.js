import { ActionTypes } from '../contants/actionTypes';

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    };
};

export const removeselectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
        // payload: products,
    };
};