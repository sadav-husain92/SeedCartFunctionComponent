/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
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
