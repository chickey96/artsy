import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entititiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entititiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;