const initialState = {};

const search = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BY_SURNAME':
            return {
                ...state,
                searchedFriends: action.payload
            };
        default:
            return state;
    }
};

export default search;