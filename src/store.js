import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import Reducer from './main/reducer.js';
import MainReducer from './enter/reducer.js'

const AppReducers = combineReducers({
    Reducer,
    MainReducer
});

const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
