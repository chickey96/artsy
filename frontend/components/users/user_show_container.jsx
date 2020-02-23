import { connect } from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../../actions/user_action';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  console.log("container", state)
  const user = state.entities.users[ownProps.match.params.id];
  const currentUser = state.session.currentUser;
  return {user, currentUser};
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));