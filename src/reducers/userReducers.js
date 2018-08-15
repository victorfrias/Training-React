import { USERS_LOADING, USERS_FETCH_SUCCESS } from '../constants/actionTypes';
import initialState from './initialState';

export default function(state = initialState.users, action) {
  switch(action.type) {
    case USERS_LOADING:
      return Object.assign({}, state, { isLoading: action.payload  });
    case USERS_FETCH_SUCCESS:
      return Object.assign({}, state, { isLoading: false, items: action.payload  });
    default:
      return state;
  }
}
