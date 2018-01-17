import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'

import MainContainer from './src/main';
import  {appStyles} from './appStyles';

import configureStore from './src/store.js';
let { store, persistor } = configureStore()

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
          <View style={appStyles.container}>
            <MainContainer style={appStyles.container}/>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
