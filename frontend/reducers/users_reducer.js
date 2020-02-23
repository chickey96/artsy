import {
  RECEIVE_CURRENT_USER
} from '../actions/session_action';

import {
  RECEIVE_USER
} from '../actions/user_action';


const usersReducer = (state = {}, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = {[action.user.id]: action.user};
      return Object.assign({}, state, currentUser ); 
    case RECEIVE_USER:
      console.log("rducer", action.user)
      const user = {[action.user.id]: action.user}
      return Object.assign({}, state, user ); 
    default:
      return state;
  }
};

export default usersReducer;