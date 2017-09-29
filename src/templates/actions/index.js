import * as api from '../api/people-request';

export const getPeoples = (idPeople) => (dispatch) => {
    dispatch({
        type: 'GET_PEOPLES_REQUEST'
    });
    api.getPeoples()
        .then((peoples) => {
            return dispatch({
                type: 'GET_PEOPLES_SUCCESS',
                payload: peoples
            })
        })
        .catch((err) => {
            dispatch({
                type: 'GET_PEOPLES_FAILURE',
                payload: err.data.message
            })
        })

}