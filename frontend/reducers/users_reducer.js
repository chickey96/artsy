import { RECEIVE_USER, REMOVE_USER } from '../actions/user_action.js';
import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = { [action.user.id]: action.user };
      return Object.assign({}, state, currentUser );
    case RECEIVE_USER:
      const user = { [action.user.id]: action.user }
      return Object.assign({}, state, user);
    case REMOVE_USER:
      let changeState = merge({}, state);
      delete changeState[action.userId];
      return changeState;
    default:
      return state;
  }
};

export default usersReducer;