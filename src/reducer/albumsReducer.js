import {
     REQUESTED_ALBUMS,
     REQUESTED_ALBUMS_SUCCESS,
     REQUESTED_ALBUMS_FAILED,
   } from '../actions/actionsTypes';
   
   const albumsState = {
     albums: [],
     loading: false,
     error: false
   };
   
   const albumsReducer = (state = albumsState, action) => {
     switch (action.type) {
       case REQUESTED_ALBUMS:
         return {
           ...state,
           albums: [],
           loading: true,
           error: false
         };
   
       case REQUESTED_ALBUMS_SUCCESS:
         return {
           ...state,
           albums: action.albums,
           loading: false,
           error: false
         };
   
       case REQUESTED_ALBUMS_FAILED:
         return {
           ...state,
           albums: [],
           loading: false,
           error: true
         };
   
       default:
         return state;
     }
   };
   
   export default albumsReducer;
   