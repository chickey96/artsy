import {
  RECEIVE_CURRENT_USER
} from '../actions/session_action';


const usersReducer = (state = {}, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = {[action.user.id]: action.user};
      return Object.assign({}, state, currentUser ); 
    default:
      return state;
  }
};

export default usersReducer;