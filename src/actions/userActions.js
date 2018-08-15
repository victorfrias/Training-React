import { USERS_LOADING, USERS_FETCH_SUCCESS } from '../constants/actionTypes';
import { performFetch } from '../constants/apiBase';

export const usersLoading = (isLoading) => {
  return {
    type: USERS_LOADING,
    payload: isLoading
  };
};

export const usersFetchSuccess = (items) => {
  return {
    type: USERS_FETCH_SUCCESS,
    payload: items
  };
};

export function fetchUsersThunk () {
  debugger;
  return (dispatch) => {
    //dispatch(usersLoading(true));

    performFetch('items', { method: 'GET' })
      .then(result => {
        debugger;
        dispatch(usersFetchSuccess(result));
      })
      .catch(error => {debugger;});
  };
};
