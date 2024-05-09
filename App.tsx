import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigations';
import {store} from './src/store';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
