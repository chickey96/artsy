import * as ProductAPIUtil from '../utils/product_util';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';
export const CLEAR_PRODUCT_ERRORS = 'CLEAR_PRODUCT_ERRORS';

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product 
});

const receiveProducts = res => ({
  type: RECEIVE_PRODUCTS,
  products: res,
});

const wipeProducts = () => {
  const type = CLEAR_PRODUCTS;
  return({type});
}

const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors 
});

export const clearProductErrors = () => ({
  type: CLEAR_PRODUCT_ERRORS
})

export const fetchProduct = id => dispatch => (
  ProductAPIUtil.fetchProduct(id)
  .then(product => dispatch(receiveProduct(product)))
);

export const fetchProducts = category => dispatch => (
  ProductAPIUtil.fetchProducts(category)
  .then(products => dispatch(receiveProducts(products)))
);

export const searchProducts = query => dispatch => {
  return (
  ProductAPIUtil.searchProducts(query)
    .then(products => dispatch(receiveProducts(products)))
  )};

export const clearProducts = () => dispatch => {
  return (dispatch(wipeProducts()));
};

export const createProduct = product => dispatch => {
  return (
    ProductAPIUtil.createProduct(product)
      .then(product => dispatch(receiveProduct(product)),
      errors => dispatch(receiveProductErrors(errors.responseJSON)))
  )
};