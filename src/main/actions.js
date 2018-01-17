export const mapStateToProps = (state) => ({
     currentPage: state.Reducer.currentPage
});

export const mapDispatchToProps = (dispatch) => ({
    navigateTo: (screen) => dispatch({type: "navigateTo", payload: screen}),
});
