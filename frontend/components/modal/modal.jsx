import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import SignupFormContainer from '../../components/session/signup_container';
import LoginFormContainer from '../../components/session/login_container';

function Modal ({ modal, closeModal }) {
  if(!modal){
    return null;
  }

  let component;
  switch(modal){
    case 'signup':
      component = <SignupFormContainer/>
      break;
    case 'login':
      component = <LoginFormContainer/>;
      break;
    default:
      return null;
  }
  return (
    <div className='modal-background' onClick={closeModal}>
    {/* stop propagation prevents modal from closing when user clicks inside */}
      <div className='modal-foreground' onClick={e => e.stopPropagation()}>
        should be here
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);