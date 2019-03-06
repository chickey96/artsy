import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../actions/product_action';

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PRODUCT:
      return { [action.product.id]: action.product };
    case RECEIVE_PRODUCTS:
      const products = {};
      action.products.forEach ( product => {
          products[product.id] = product;
      });
      return products;
    default:
      return state;
  }
};

export default productsReducer;