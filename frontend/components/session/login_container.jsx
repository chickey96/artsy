import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createSession, clearErrors } from '../../actions/session_action';

const mapStateToProps = state => ({
  formType: 'Sign in',
  greeting: 'Sign in',
  tagline: '',
  errors: state.errors.session,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(createSession(user)),
  demoAction: user => dispatch(createSession(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);