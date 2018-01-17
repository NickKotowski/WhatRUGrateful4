import { connect } from 'react-redux';

import EnterItemScreen from './index.js';

const mapStateToProps = (state) => ({
     content: state.MainReducer.content
});

const mapDispatchToProps = (dispatch) => ({
    addNewItem: (item) => dispatch({type: addNewItem, payload: item}),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnterItemScreen);
