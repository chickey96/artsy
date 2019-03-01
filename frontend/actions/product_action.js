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

export const fetchProducts = () => dispatch => (
  ProductAPIUtil.fetchProducts()
  .then(products => dispatch(receiveProducts(products)))
);