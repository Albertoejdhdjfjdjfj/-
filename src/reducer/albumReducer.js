import {
  REQUESTED_ALBUM,
  REQUESTED_ALBUM_SUCCESS,
  REQUESTED_ALBUM_FAILED
} from '../actions/actionsTypes';

const albumState = {
  photos: [],
  title: '',
  autor: '',
  loading: false,
  error: false
};

const albumReducer = (state = albumState, action) => {
  switch (action.type) {
    case REQUESTED_ALBUM:
      return {
        ...state,
        photos: [],
        title: '',
        autor: '',
        userId: 0,
        loading: true,
        error: false
      };

    case REQUESTED_ALBUM_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        title: action.title,
        autor: action.autor,
        userId: action.userId,
        loading: false,
        error: false
      };

    case REQUESTED_ALBUM_FAILED:
      return {
        ...state,
        photos: [],
        title: '',
        autor: '',
        userId: 0,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default albumReducer;
