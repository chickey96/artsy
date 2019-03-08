import { RECEIVE_CARTS, REMOVE_CART } from '../actions/cart_action';
import merge from 'lodash/merge';

const cartsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CARTS:
      const carts = {};
      action.carts.forEach(cart => {
        carts[cart.id] = cart;
      });
      return carts;
    case REMOVE_CART:
      let changeState = merge({}, state);
      delete changeState[action.cartId];
      return changeState;
    default:
      return state;
  }
};

export default cartsReducer;