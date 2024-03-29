import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';
import productErrorsReducer from './product_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  comments: commentErrorsReducer,
  products: productErrorsReducer,
});