import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import {fetchComments, createComment} from '../../actions/comment_action';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  const comments = Object.values(state.entities.comments);
  const currentUser = state.session.currentUser;
  return {comments, currentUser};
};

const mapDispatchToProps = dispatch => ({
  fetchComments: productId => dispatch(fetchComments(productId)),
  createComment: comment => dispatch(createComment(comment))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
);