import { combineReducers, createStore } from 'redux';

import Reducer from './main/reducer.js';
import MultiplyReducer from './multiply/reducer.js'

const AppReducers = combineReducers({
    Reducer,
    MultiplyReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);

export default store;
