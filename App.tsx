/**
 APP FILE
 */

import React from 'react';

import StackNavigation from './src/features/RootStackNavigator/RootStackNavigator';

import store from './src/redux/store/store';
import { Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation/>
    </Provider>
  );
};

export default App;
