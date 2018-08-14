import { USERS_LOADING } from '../constants/actionTypes';
import initialState from './initialState';

export default function(state = initialState.users, action) {
  switch(action.type) {
    case USERS_LOADING:
      return Object.assign({}, state, { isLoading: action.payload  });
    default:
      return state;
  }
}
