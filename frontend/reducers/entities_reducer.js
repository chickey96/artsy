import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import commentsReducer from './comments_reducer';
import cartsReducer from './carts_reducer';

export default combineReducers({
  users: usersReducer,
  products: productsReducer,
  comments: commentsReducer,
  carts: cartsReducer
});