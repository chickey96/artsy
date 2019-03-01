import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { createSession } from '../../actions/session_action';
import { closeModal, openModal } from '../../actions/modal_action';

const mapStateToProps = state => ({
  formType: 'Sign in',
  greeting: 'Sign in to continue',
  tagline: '',
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(createSession(user)),
  closeModal: () => dispatch(closeModal()),
  demoAction: user => dispatch(createSession(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);