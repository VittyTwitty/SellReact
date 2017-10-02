const initialState = [];
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
            return {
                ...state,
                friends: action.payload
            };
        default:
            return state
    }
};

export default users;