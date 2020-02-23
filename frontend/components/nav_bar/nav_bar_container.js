import { connect } from 'react-redux';
import { deleteSession } from '../../actions/session_action';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return(
    { currentUser: state.entities.users[state.session.currentUser] }
  )
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(deleteSession())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));