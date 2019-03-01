import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { createUser } from '../../actions/session_action';
import { openModal, closeModal } from '../../actions/modal_action';


const mapStateToProps = state => ({
  formType: 'Register',
  greeting: 'Create your account',
  tagline: 'Registration is easy.',
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  action: user => dispatch(createUser(user)),
  altForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Login
    </button>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);