import{takeEvery,call,put} from 'redux-saga/effects';
import { fetchUsers, requestUsers,requestUsersEror,requestUsersSuccess } from '../actions/userActions';
import { FETCH_USERS } from '../actions/actionsTypes';

export function* watchFetchUsers(){
     yield takeEvery(FETCH_USERS,fetchUsersList)

}

export function* fetchUsersList(){
     try{
          yield put(requestUsers());
          const data=yield call(()=>{
               return  fetch("https://jsonplaceholder.typicode.com/users")
               .then((response) => response.json())
          });
          yield put(requestUsersSuccess(data))
     }
     catch(error){
          yield put(requestUsersEror())
     }
}