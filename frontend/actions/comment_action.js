import * as CommentAPIUtil from '../utils/comment_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';


const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment 
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments 
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId 
});

const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors 
});

export const fetchComment = id => dispatch => (
  CommentAPIUtil.fetchComment(id)
  .then(comment => dispatch(receiveComment(comment)))
);

export const fetchComments = productId => dispatch => {
  return (
  CommentAPIUtil.fetchComments(productId)
  .then(comments => {
    dispatch(receiveComments(comments))
  })
)};

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
  .then(comment => dispatch(receiveComment(comment)),
  errors => dispatch(receiveCommentErrors(errors.responseJSON)))
);

export const updateComment = comment => dispatch => (
  CommentAPIUtil.updateComment(comment)
  .then(comment => dispatch(receiveComment(comment)),
  errors => dispatch(receiveCommentErrors(errors.responseJSON)))
);

export const deleteComment = id => dispatch => (
  CommentAPIUtil.deleteComment(id)
  .then((id) => dispatch(removeComment(id)), 
  errors => dispatch(receiveCommentErrors(errors.responseJSON)))
);