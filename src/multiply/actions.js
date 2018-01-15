import { connect } from 'react-redux';

import * as Actions from './actionTypes.js';
import Multiply from './index.js';

const mapStateToProps = (state) => ({
     count: state.MultiplyReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    multiply: () => dispatch({type: Actions.COUNTER_MULTIPLY}),
    divide: () => dispatch({type: Actions.COUNTER_DIVIDE}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Multiply);
