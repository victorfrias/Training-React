import { USERS_LOADING, USERS_FETCH_SUCCESS,USERS_POSTING,USERS_POST_SUCCESS } from '../constants/actionTypes';
import { performFetch } from '../constants/apiBase';

export const usersLoading = (isLoading) => {
  return {
    type: USERS_LOADING,
    payload: isLoading
  };
};

export const usersPosting = (isPosting) => {
  debugger;

  return {
    type: USERS_POSTING,
    payload: isPosting
  };
};

export function usersFetchSuccess(items) {
  return {
    type: USERS_FETCH_SUCCESS,
    payload: items
  };
}

export function usersPostSuccess(item) {
  debugger;
  return {
    type: USERS_POST_SUCCESS,
    payload: item
  };
}

export function fetchUsersThunk () {
  return (dispatch) => {
    dispatch(usersLoading(true));

    performFetch('items', { method: 'GET' })
      .then(result => {
        dispatch(usersFetchSuccess(result));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function postUsersThunk (objItem) {
  return (dispatch) => {
    dispatch(usersPosting(true));

    performFetch('items', { method: 'POST', body : JSON.stringify( objItem ) })
      .then(item => {
        dispatch(usersPostSuccess(item));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

