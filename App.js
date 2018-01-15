import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store.js';
import CounterAction from './src/main/actions.js';
import CounterMultiply from './src/multiply/actions.js';
import  {appStyles} from './appStyles';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={appStyles.container}>
          <CounterAction style={appStyles.container}/>
          <CounterMultiply style={appStyles.container}/>
        </View>
      </Provider>
    );
  }
}
