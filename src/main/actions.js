import { connect } from 'react-redux';

import MainContainer from './index.js';

const mapStateToProps = (state) => ({
     currentPage: state.Reducer.currentPage
});

const mapDispatchToProps = (dispatch) => ({
    navigateTo: (screen) => dispatch({type: "navigateTo", payload: screen}),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


//main datei machen, in index zusammenführen 
