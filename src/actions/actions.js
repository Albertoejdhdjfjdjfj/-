import {
  REQUESTED_USERS,
  REQUESTED_USERS_SUCCESS,
  REQUESTED_USERS_FAILED,
  FETCH_USERS,
  REQUESTED_USER,
  REQUESTED_USER_SUCCESS,
  REQUESTED_USER_FAILED,
  FETCH_USER,
  REQUESTED_USER_ALBUMS,
  REQUESTED_USER_ALBUMS_SUCCESS,
  REQUESTED_USER_ALBUMS_FAILED,
  FETCH_USER_ALBUMS,
  REQUESTED_ALBUMS,
  REQUESTED_ALBUMS_SUCCESS,
  REQUESTED_ALBUMS_FAILED,
  FETCH_ALBUMS
} from './actionsTypes';

//-------USERS--------------------------------------------

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

export const requestUsersEror = () => {
  return {
    type: REQUESTED_USERS_FAILED
  };
};

//---USER--------------------------------------------------

export const requestUser = () => {
  return {
    type: REQUESTED_USER
  };
};

export const fetchUser = (id) => {
  return {
    type: FETCH_USER,
    id: id
  };
};

export const requestUserSuccess = (data) => {
  return {
    type: REQUESTED_USER_SUCCESS,
    user: data
  };
};

export const requestUserEror = () => {
  return {
    type: REQUESTED_USER_FAILED
  };
};

//--------USER_ALBUMS-------------------------------

export const requestUserAlbums = () => {
  return {
    type: REQUESTED_USER_ALBUMS
  };
};

export const fetchUserAlbums = (id) => {
  return {
    type: FETCH_USER_ALBUMS,
    id: id
  };
};

export const requestUserAlbumsSuccess = (data) => {
  return {
    type: REQUESTED_USER_ALBUMS_SUCCESS,
    albums: data
  };
};

export const requestUserAlbumsEror = () => {
  return {
    type: REQUESTED_USER_ALBUMS_FAILED
  };
};

//------------ALBUMS----------------------------------
export const requestAlbums = () => {
  return {
    type: REQUESTED_ALBUMS
  };
};

export const fetchAlbums = () => {
  return {
    type: FETCH_ALBUMS
  };
};

export const requestAlbumsSuccess = (data) => {
  return {
    type: REQUESTED_ALBUMS_SUCCESS,
    albums: data
  };
};

export const requestAlbumsEror = () => {
  return {
    type: REQUESTED_ALBUMS_FAILED
  };
};
