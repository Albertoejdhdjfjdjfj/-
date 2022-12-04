import {
  REQUESTED_USERS,
  REQUESTED_USERS_SUCCESS,
  REQUESTED_USERS_FAILED,
  FETCH_USERS
} from './actionsTypes';

export const requestUsers = () => {
  return {
    type: REQUESTED_USERS
  };
};

export const fetchUsers = () => {
  return {
    type: FETCH_USERS
  };
};

export const requestUsersSuccess = (data) => {
  return {
    type: REQUESTED_USERS_SUCCESS,
    users: data
  };
};

export const requestUsersEror = (data) => {
  return {
    type: REQUESTED_USERS_FAILED
  };
};
