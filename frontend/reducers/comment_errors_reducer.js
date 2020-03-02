import { RECEIVE_COMMENT_ERRORS,
         REMOVE_COMMENT,
         RECEIVE_COMMENT } from '../actions/comment_action';

const commentErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case REMOVE_COMMENT:
      return [];
    case RECEIVE_COMMENT:
      return [];
    default:
      return state;
  }
};

export default commentErrorsReducer;