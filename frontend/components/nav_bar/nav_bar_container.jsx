import { connect } from 'react-redux';
import { deleteSession } from '../../actions/session_action';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_action.js';

const mapStateToProps = state => {
  return(
    { currentUser: state.entities.users[state.session.currentUser] }
  )
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(deleteSession()),
  fetchUser: id => dispatch(fetchUser(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));