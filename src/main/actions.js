import { connect } from 'react-redux';

import * as Actions from './actionTypes.js';
import Main from './index.js';

const mapStateToProps = (state) => ({
     count: state.Reducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: Actions.COUNTER_INCREMENT}),
    decrement: () => dispatch({type: Actions.COUNTER_DECREMENT}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
