/**
 LOGIN SAGA
 */
import { call, put } from 'redux-saga/effects';
import { updateName } from '../../features/Auth/LoginScreen/loginSlice';

const getUserName = async () => {
    console.log("@@@ fetch User saga in api call ")
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("@@@ fetch User saga after api call ")
    const result = await res.json();
    return result[Math.floor(Math.random() * 11)].name;
}

export function* fetchUserName() {
   try {
    const userName: void = yield getUserName();
    yield put(updateName(userName));
   } catch (e) {
    console.log("@@@ error =====>", e)
   }
}
