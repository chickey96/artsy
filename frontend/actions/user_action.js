import * as UserAPIUtil from '../utils/user_util';
import { receiveErrors } from './session_action';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
});

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id)
  .then(user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user)
  .then(user => dispatch(receiveUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteUser = id => dispatch => (
  UserAPIUtil.deleteUser(id)
  .then(id => dispatch(removeUser(id)))
);