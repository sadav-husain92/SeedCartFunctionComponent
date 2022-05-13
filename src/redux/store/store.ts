import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import loginReducer from '../../features/Auth/LoginScreen/loginSlice';
import Sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();


  const store = configureStore({
    reducer: loginReducer,
    middleware:[sagaMiddleware],
    devTools: true
  })
  // Kick off the root saga
  sagaMiddleware.run(Sagas);

  console.log("@@@ Saga running ....")

  export default store;


