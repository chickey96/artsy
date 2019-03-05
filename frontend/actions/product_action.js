import * as ProductAPIUtil from '../utils/product_util';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product 
});

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const fetchProduct = id => dispatch => (
  ProductAPIUtil.fetchProduct(id)
  .then(product => dispatch(receiveProduct(product)))
);

export const fetchProducts = category => dispatch => (
  ProductAPIUtil.fetchProducts(category)
  .then(products => dispatch(receiveProducts(products)))
);