import {RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT} from '../actions/comment_action';
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case RECEIVE_COMMENTS:
      const comments = {};
      action.comments.forEach ( comment => {
        comments[comment.id] = comment;
      });
      return comments;
    case REMOVE_COMMENT:
      let changeState = merge({}, state);
      delete changeState[action.commentId.commentId];
      return changeState;
    default:
      return state;
  }
};

export default commentsReducer;