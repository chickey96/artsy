import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import {fetchComments} from '../../actions/comment_action';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  const comments = Object.values(state.entities.comments);
  return {comments};
};

const mapDispatchToProps = dispatch => ({
  fetchComments: productId => dispatch(fetchComments(productId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));