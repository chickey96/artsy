import { connect } from 'react-redux';
import { logoutCurrentUser } from '../../actions/session_action';
import { openModal } from '../../actions/modal_action';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutCurrentUser()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);