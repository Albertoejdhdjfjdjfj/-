import {
  REQUESTED_USERS,
  REQUESTED_USERS_SUCCESS,
  REQUESTED_USERS_FAILED
} from '../actions/actionsTypes';

const initialState = {
  users: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_USERS:
      return {
        ...state,
        users: [],
        loading: true,
        error: false
      };

    case REQUESTED_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
        error: false
      };

    case REQUESTED_USERS_FAILED:
      return {
        ...state,
        users: [],
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default reducer;
