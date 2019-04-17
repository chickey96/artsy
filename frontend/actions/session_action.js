import * as SessionAPIUtil from '../utils/session_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = err => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: err
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const createUser = user => dispatch => (
  SessionAPIUtil.createUser(user)
  .then(user => {
    dispatch(receiveCurrentUser(user))
  },
  errors => {
    dispatch(receiveErrors(errors.responseJSON))
  })
);

export const createSession = user => dispatch => (
  SessionAPIUtil.createSession(user)
    .then(user => {
      dispatch(receiveCurrentUser(user))
    },
      errors => { console.log(errors);
        dispatch(receiveErrors(errors.responseJSON))
    })
);

export const deleteSession = () => dispatch => (
  SessionAPIUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()),
      errors => (dispatch(receiveErrors(errors.responseJSON))))
);