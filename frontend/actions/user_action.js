import * as UserAPIUtil from '../utils/user_util';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user 
});

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id)
  .then(user => dispatch(receiveUser(user)))
);