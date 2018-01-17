import { combineReducers, createStore } from 'redux';

import Reducer from './main/reducer.js';
import MainReducer from './enter/reducer.js'

const AppReducers = combineReducers({
    Reducer,
    MainReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);

export default store;
