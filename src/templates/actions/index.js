import * as api from '../api/users-request';

// const receiveUsers = users => ({
//   type: 'GET_ALL_USERS',
//   users: users
// });
export const getAllUsers = (userId) => (dispatch) => {
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
        // .then((user) => {
        // console.log('user',user.payload);
        //     userId ? dispatch({
        //         type: 'GET_ONE_USER',
        //         payload: user.payload[userId]
        //     }) : null
        // })
        .catch((err) => {
            dispatch({
                type: 'GET_ALL_USERS_FAIL',
                payload: err.data.message
            })
        });
};

export const getOneUser = userId => (dispatch, getState) => {
    let a = getState().users.users;
    a.filter((item) => {
        if (item.login.md5 === userId) {
            dispatch({
                type: 'ADD_ONE_USER',
                payload: item
            });
        }
    });

};

export const addToFriends = userId => (dispatch, getState) => {
    let friends = getState().users.users;
    friends.filter((item) => {
        if(item.login.md5 === userId) {
            dispatch({
                type: 'ADD_TO_FRIEND',
                payload: item
            })
        }
    })
}
