/**
 ROOT SAGA
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchUserName } from './loginSaga';


const Sagas = function* mySaga() {
    yield takeEvery("UPDATE_NAME", fetchUserName);
}

export default Sagas;