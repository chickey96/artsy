import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { createSession } from '../../actions/session_action';
import { closeModal, openModal } from '../../actions/modal_action';

const mapStateToProps = ({ errors }) => ({
  formType: 'login',
  errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(createSession(user)),
  closeModal: () => dispatch(closeModal()),
  altForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Register
    </button>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);