import { updateUser, deleteUser} from '../../actions/user_action';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import UserEdit from './user_edit';
import { clearErrors } from '../../actions/session_action';

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.currentUser];
  const errors = state.errors.session;

  return {currentUser, errors};
};

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  deleteUser: id => dispatch(deleteUser(id)),
  clearErrors: () => dispatch(clearErrors()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserEdit)
);
