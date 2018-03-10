import React from 'react';
import { 
  Provider,
} from 'react-redux';

import {
  StackNavigator,
} from 'react-navigation';

import store from './store/';
import Routes from './routes';

const RootStack = StackNavigator(
  Routes
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
      );
    }
}
