import { call, put } from 'redux-saga/effects';
import { updateName } from '../../features/Auth/LoginScreen/loginSlice'

const getUserName = async () => {
    console.log("@@@ fetch User saga in api call ")
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("@@@ fetch User saga after api call ")
    const result = await res.json();
    return result[Math.floor(Math.random() * 11)].name;
}

export function* fetchUserName() {
    console.log("@@@ fetch User saga ")
   try {
    const userName = yield getUserName();
    console.log("@@@ fetch User saga in try ")
    yield put(updateName(userName));
   } catch (e) {
    console.log("@@@ error =====>", e)
   }
}
