import * as CartAPIUtil from '../utils/cart_util';
export const RECEIVE_CARTS = 'RECEIVE_CARTS';
export const REMOVE_CART = 'REMOVE_CART';

const receiveCarts = carts => ({
  type: RECEIVE_CARTS,
  carts
});

const removeCart = (cartId) => ({
  type: REMOVE_CART,
  cartId
});

export const fetchCarts = userId => dispatch => {
  return (
    CartAPIUtil.fetchCarts(userId)
      .then(carts => {
        dispatch(receiveCarts(carts))
      })
  )
};

export const createCart = cart => dispatch => (
  CartAPIUtil.createCart(cart)
    .then(cart => dispatch(receiveCart(cart)))
);

export const deleteCart = id => dispatch => (
  CartAPIUtil.deleteCart(id)
    .then((id) => dispatch(removeCart(id)))
);