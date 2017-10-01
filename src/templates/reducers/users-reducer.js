const initialState = [];
const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS_REQUEST':
    case 'GET_ALL_USERS':
      return {
        ...state,
        users: action.payload
      };

    case 'GET_ALL_USERS_FAIL':
    default:
      return state
  }
};

export default users;