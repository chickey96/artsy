import { connect } from 'react-redux';
import CommentShow from './comment_show';
import { updateComment, deleteComment, fetchComment } from '../../actions/comment_action';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {currentUser};
};

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: id => dispatch(deleteComment(id)),
  fetchComment: id => dispatch(fetchComment(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentShow));





