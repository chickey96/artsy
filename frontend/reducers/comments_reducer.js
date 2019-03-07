import {RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT} from '../actions/comment_action';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COMMENT:
      let newState = Object.assign({}, state);
      newState[action.comment.id] = action.comment;
      return newState;
    case RECEIVE_COMMENTS:
      const comments = {};
      action.comments.forEach ( comment => {
        comments[comment.id] = comment;
      });
      return comments;
    case REMOVE_COMMENT:
      let changeState = Object.assign({}, state);
      delete changeState[action.commentId];
      return changeState;
    default:
      return state;
  }
};

export default commentsReducer;