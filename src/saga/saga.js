import { takeEvery, call, put } from 'redux-saga/effects';

import {
  requestUsers,
  requestUsersEror,
  requestUsersSuccess,
  requestUser,
  requestUserEror,
  requestUserSuccess,
  requestUserAlbums,
  requestUserAlbumsEror,
  requestUserAlbumsSuccess,
  requestAlbums,
  requestAlbumsEror,
  requestAlbumsSuccess,
  requestAlbum,
  requestAlbumEror,
  requestAlbumSuccess
} from '../actions/actions';
import {
  FETCH_USERS,
  FETCH_USER,
  FETCH_USER_ALBUMS,
  FETCH_ALBUMS,
  FETCH_ALBUM
} from '../actions/actionsTypes';

export function* watchFetch() {
  yield takeEvery(FETCH_USERS, fetchUsersList);
  yield takeEvery(FETCH_USER, fetchUserData);
  yield takeEvery(FETCH_USER_ALBUMS, fetchUserAlbumsList);
  yield takeEvery(FETCH_ALBUMS, fetchAlbumsList);
  yield takeEvery(FETCH_ALBUM, fetchAlbumPhotos);
}

export function* fetchUsersList() {
  try {
    yield put(requestUsers());
    const data = yield call(() => {
      return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
        response.json()
      );
    });
    yield put(requestUsersSuccess(data));
  } catch (error) {
    yield put(requestUsersEror());
  }
}

export function* fetchUserData(action) {
  try {
    yield put(requestUser());
    const data = yield call(() => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${action.id}`).then((response) =>
        response.json()
      );
    });
    yield put(requestUserSuccess(data));
  } catch (error) {
    yield put(requestUserEror());
  }
}

export function* fetchUserAlbumsList(action) {
  try {
    yield put(requestUserAlbums());
    const data = yield call(() => {
      return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${action.id}`).then(
        (response) => response.json()
      );
    });
    yield put(requestUserAlbumsSuccess(data));
  } catch (error) {
    yield put(requestUserAlbumsEror());
  }
}

export function* fetchAlbumsList() {
  try {
    yield put(requestAlbums());
    const data = yield call(() => {
      return fetch(`https://jsonplaceholder.typicode.com/albums`).then((response) =>
        response.json()
      );
    });
    yield put(requestAlbumsSuccess(data));
  } catch (error) {
    yield put(requestAlbumsEror());
  }
}

export function* fetchAlbumPhotos(action) {
  try {
    yield put(requestAlbum());
    const data = yield call(() => {
      return fetch(`https://jsonplaceholder.typicode.com/albums/${action.id}/photos`).then(
        (response) => response.json()
      );
    });

    const title = yield call(() => {
      return fetch(`https://jsonplaceholder.typicode.com/albums/${action.id}`).then((response) =>
        response.json()
      );
    });

    const userId = title.userId;

    const autor = yield call(() => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) =>
        response.json()
      );
    });

    yield put(requestAlbumSuccess(data, title.title, autor.name, userId));
  } catch (error) {
    yield put(requestAlbumEror());
  }
}
