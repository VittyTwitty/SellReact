const initialState = {
    friends: []
};
const users = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS_REQUEST':
        case 'GET_ALL_USERS':
            return {
                ...state,
                users: action.payload
            };
        case 'ADD_ONE_USER':
            return {
                ...state,
                currencyUser: action.payload
            };
        case 'GET_ALL_USERS_FAIL':
        case 'ADD_TO_FRIENDS':
            let flag = true;
            // Если id друга равен какому-то в списке то False
            state.friends.forEach((friend) => {
                if (friend.login.md5 === action.payload.login.md5) {
                    flag = false;
                }
            });
            // При добвлении друга добавляем его к прочим в конец,
            // иначе просто возврат стейта
            return {
                ...state,
                friends: (flag) ? state.friends.concat(action.payload) : state.friends
            };
        case 'FILTER_FRIENDS_BY_NAME':
            return {
                ...state,
                friends: action.payload
            };
        case 'FILTER_FRIENDS_BY_YEARS':
        default:
            return state
    }
};

export default users;