import * as Actions from './actionTypes.js';

const MultiplyReducer = (state = {count: 1}, action) => {
    switch (action.type) {
        case Actions.COUNTER_MULTIPLY:
            return Object.assign({}, state, {
                count: state.count * 5
            });
        case Actions.COUNTER_DIVIDE:
            return Object.assign({}, state, {
               count: state.count / 5
            });
        default:
            return state;
    }
}

export default MultiplyReducer;
