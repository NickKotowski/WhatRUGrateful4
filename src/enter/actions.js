export const mapStateToProps = (state) => ({
     content: state.MainReducer.content
});

export const mapDispatchToProps = (dispatch) => ({
    addNewItem: (item) => dispatch({type: 'addNewItem', payload: item}),
});
