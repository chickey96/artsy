import { updateUser, deleteUser} from '../../actions/user_action';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import UserEdit from './user_edit';

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.currentUser];
  return {currentUser};
};

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  deleteUser: id => dispatch(deleteUser(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserEdit)
);
