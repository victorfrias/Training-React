/* eslint-disable no-console */
import { USERS_LOADING, USERS_FETCH_SUCCESS, USERS_POSTING, USERS_POST_SUCCESS } from '../constants/actionTypes';
import { performFetch, API_BASE_ADDRESS } from '../constants/apiBase';
import {call, put, takeLatest} from "redux-saga/effects";
import axios from 'axios';

export const usersLoading = (isLoading) => {
  return {
    type: USERS_LOADING,
    payload: isLoading
  };
};

export function usersFetchSuccess(items) {
  return {
    type: USERS_FETCH_SUCCESS,
    payload: items
  };
}

export function userPosting(isPosting) {
  return {
    type: USERS_POSTING,
    payload: isPosting
  };
}

export function usersPostSuccess(item) {
  return {
    type: USERS_POST_SUCCESS,
    payload: item
  };
}

export function fetchUsersThunk () {
  return (dispatch) => {
    dispatch(usersLoading(true));

    performFetch('items')
      .then(result => {
        dispatch(usersFetchSuccess(result));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function postUserThunk (objPost) {
  return (dispatch) => {
    dispatch(userPosting(true));

    performFetch('items', { method: 'POST', body: JSON.stringify(objPost) })
      .then(item => {
        dispatch(usersPostSuccess(item));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

//Saga functions

/**
 * Saga function to be mapped in initialization to find desired action
 */
export function* watcherSaga() {
  yield [
    takeLatest("API_CALL_REQUEST", fetchUsersSaga),
    takeLatest("API_POST_REQUEST", action => postSaga(action))
  ];
}

/**
 * Exported function to be called in the component
 */
export function getUsersSaga() {
  return { type: "API_CALL_REQUEST" };
}

export function postUsersSaga(body) {
  return { type: "API_POST_REQUEST", payload: body };
}

function fetchUsersAxios(method, body) {
  return () => {
    return axios(body === undefined
      ? { method, url: `${API_BASE_ADDRESS}${'items'}` }
      : { method, url: `${API_BASE_ADDRESS}${'items'}`, data: body}
    );
  };
}

function *fetchUsersSaga() {
  yield put({ type: USERS_LOADING, payload: true });

  const result = yield call(fetchUsersAxios("get"));

  yield put(usersFetchSuccess(result.data));
}

function *postSaga(action) {
  yield put(userPosting(true));

  const result = yield call(fetchUsersAxios("post", action.payload));

  yield put(usersPostSuccess(result.data));
}
