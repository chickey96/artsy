import { connect } from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../../actions/user_action.js';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  const currentUser = state.entities.users[state.session.currentUser];
  return {user, currentUser};
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));