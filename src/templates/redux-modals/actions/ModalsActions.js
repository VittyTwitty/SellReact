import {ADD_MODAL_TO_VIEW, DELETE_MODAL_TO_VIEW} from "../constants/Modal";

export function addModalsToView(itemId) {
  return (dispatch) => {
    dispatch({
      type: ADD_MODAL_TO_VIEW,
      payload: itemId
    });
  }
}

export function closeModalsToView() {
  return (dispatch) => {
    dispatch({
      type: DELETE_MODAL_TO_VIEW
    })
  }
}