import * as api from '../api/users-request';


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
        if (item.login.md5 === userId) {
            dispatch({
                type: 'ADD_TO_FRIENDS',
                payload: item
            })
        }
    })
};

// Функция принимает 3 параметра: поле, массив по которому будет сортировка,
// вторую часть поля. Возвращает новый массив

const sortState = (field, users, secondField) => {
    let sortedUsers = users.sort((a, b) => {

        if (a[field][secondField] > b[field][secondField]) {
            return 1;
        }
        if (a[field][secondField] < b[field][secondField]) {
            return -1;
        }
        return 0;
    });
    return sortedUsers;
};


// Экшен принимает два параметра из FriendsFilters.js, возвращает функцию (dispatch, getState)

export const filterFriendsByName = (firstField, secondField) => (dispatch, getState) => {
    // Достаёт из стейта поле friends
    let friends = getState().users.friends;
    let sortableFriends = sortState(firstField, friends, secondField);
    console.log('FRIENDS', sortableFriends);
    return dispatch({
        type: 'FILTER_FRIENDS_BY_NAME',
        payload: sortableFriends
    })

};

export const searchFriendsBySurname = (innerSurname) => (dispatch, getState) => {
    let friends = getState().users.friends;
    let searchQuery = innerSurname.toLowerCase();


    let displayingFriends = friends.filter((item) => {
        let surname = item.name.last.toLowerCase();
        return surname.indexOf(searchQuery) !== -1;
        // if(surname === innerSurname) {
        //     console.log(item);
        //     // return item;
        // }

    });

    console.log(displayingFriends);
    return dispatch({
        type: 'SEARCH_BY_SURNAME',
        payload: displayingFriends
    })
};
