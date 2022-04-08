import { RECEIVE_PRODUCT_ERRORS,
         RECEIVE_PRODUCT } from "../actions/product_action";

const productErrorsReducer = (state = [], action) => {
    Object.freeze(state);
}