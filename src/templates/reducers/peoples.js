const initialState = {
    peoples: []
};

export default function peoples(state = initialState, action) {
    switch (action.type) {
        case 'GET_PEOPLES_REQUEST':
        case 'GET_PEOPLES_SUCCESS':
            return {
                ...state,
                peoples: action.payload,
            };
        case 'GET_PEOPLES_FAILURE':
        default:
            return state;
    }
}