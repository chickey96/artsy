import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from '../actions/session_action';
import { RECEIVE_CARTS,
         REMOVE_CART,
         RECEIVE_CART } from '../actions/cart_action';

const cartsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARTS:
      const carts = {};
      action.carts.forEach(cart => (carts[cart.id] = cart));
      return carts;
    case RECEIVE_CART:
      return merge({}, state, { [action.cart.id]: action.cart });
    case REMOVE_CART:
      let changeState = merge({}, state);
      delete changeState[action.cartId];
      return changeState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default cartsReducer;