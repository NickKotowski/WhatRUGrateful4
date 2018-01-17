import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store.js';
import MainContainer from './src/main';
import  {appStyles} from './appStyles';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={appStyles.container}>
          <MainContainer style={appStyles.container}/>
        </View>
      </Provider>
    );
  }
}
