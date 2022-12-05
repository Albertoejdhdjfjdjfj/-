import {
     REQUESTED_USER_ALBUMS,
     REQUESTED_USER_ALBUMS_SUCCESS,
     REQUESTED_USER_ALBUMS_FAILED,
   } from '../actions/actionsTypes';
   
   const userAlbumsState = {
     albums: [],
     loading: false,
     error: false
   };
   
   const userAlbumsReducer = (state = userAlbumsState, action) => {
     switch (action.type) {
       case REQUESTED_USER_ALBUMS:
         return {
           ...state,
           albums: [],
           loading: true,
           error: false
         };
   
       case REQUESTED_USER_ALBUMS_SUCCESS:
         return {
           ...state,
           albums: action.albums,
           loading: false,
           error: false
         };
   
       case REQUESTED_USER_ALBUMS_FAILED:
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
   
   export default userAlbumsReducer;
   