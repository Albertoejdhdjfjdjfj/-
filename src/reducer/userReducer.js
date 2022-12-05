import {
  REQUESTED_USER,
  REQUESTED_USER_SUCCESS,
  REQUESTED_USER_FAILED,
} from '../actions/actionsTypes';

const userState = {
  user: {},
  loading: false,
  error: false
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case REQUESTED_USER:
      return {
        ...state,
        user: {},
        loading: true,
        error: false
      };

    case REQUESTED_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
        error: false
      };

    case REQUESTED_USER_FAILED:
      return {
        ...state,
        user: {},
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default userReducer;
