import * as CartAPIUtil from '../utils/cart_util';
export const RECEIVE_CARTS = 'RECEIVE_CARTS';
export const RECEIVE_CART = 'RECEIVE_CART';
export const REMOVE_CART = 'REMOVE_CART';

const receiveCarts = carts => {
  const type = RECEIVE_CARTS;
  return ({type, carts})
};

const receiveCart = cart => {
  const type = RECEIVE_CART;
  return({type, cart})
};

const removeCart = info => ({
  type: REMOVE_CART,
  cartId: info.cartId
});

export const fetchCarts = userId => dispatch => {
  return (
    CartAPIUtil.fetchCarts(userId)
      .then(carts => {
        dispatch(receiveCarts(carts))
      })
  )
};
export const fetchCart = id => dispatch => {
  return (
    CartAPIUtil.fetchCart(id)
      .then(cart => {
        dispatch(receiveCart(cart))
      })
  )
};

export const createCart = cart => dispatch => {
  return (
  CartAPIUtil.createCart(cart)
    .then(cart => {
      dispatch(receiveCart(cart))
    })
  )
};

export const deleteCart = id => dispatch => {
  return(
  CartAPIUtil.deleteCart(id)
    .then(id => {
      dispatch(removeCart(id))
    })
  )
  };