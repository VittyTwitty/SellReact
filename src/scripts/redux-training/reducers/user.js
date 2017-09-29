import {CHANGE_NAME, CHANGE_NAME_SUCCESS} from "../constants/Page";

const initialState = {
  name: 'Mega',
  surname: 'Pacansky',
  age: 24,
  userFlag: true
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
        userFlag: true
      };
    case CHANGE_NAME_SUCCESS:
      return {
        ...state,
        userFlag: true
      };
    default:
      return state
  }
}
