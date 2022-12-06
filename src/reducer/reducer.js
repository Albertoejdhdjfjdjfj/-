import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import userReducer from './userReducer';
import userAlbumsReducer from './userAlbumsReducer';
import albumsReducer from './albumsReducer';

const reducers = combineReducers({
  users: usersReducer,
  user: userReducer,
  userAlbums: userAlbumsReducer,
  albums: albumsReducer
});

export default reducers;
