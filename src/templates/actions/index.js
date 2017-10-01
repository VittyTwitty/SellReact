import * as api from '../api/users-request';

// const receiveUsers = users => ({
//   type: 'GET_ALL_USERS',
//   users: users
// });
export const getAllUsers = () => (dispatch) => {
  dispatch({
    type: 'GET_ALL_USERS_REQUEST'
  });
  api.getUsers()
    .then((users) => {
      return dispatch({
        type: 'GET_ALL_USERS',
        payload: users
      })
    })
    .catch((err) => {
      dispatch({
        type: 'GET_ALL_USERS_FAIL',
        payload: err.data.message
      })
    });
};