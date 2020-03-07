import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createUser,
         clearErrors,
         createSession } from '../../actions/session_action';

const mapStateToProps = state => ({
  formType: 'Register',
  greeting: 'Create your account',
  tagline: 'Registration is easy.',
  errors: state.errors.session,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(createUser(user)),
  demoAction: user => dispatch(createSession(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);