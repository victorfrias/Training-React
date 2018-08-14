import { USERS_LOADING } from '../constants/actionTypes';

export const usersLoading = (isLoading) => {
  return {
    type: USERS_LOADING,
    payload: isLoading
  };
};

export const fetchUsersThunk = () => {
  return (dispatch) => {
    dispatch(usersLoading(true));
  };
};
