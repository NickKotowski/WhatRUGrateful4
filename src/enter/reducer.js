const MainReducer = (state = {content: []}, action) => {
    console.log(state);
    switch (action.type) {
        case "addNewItem":
            return Object.assign({}, state, {
                content: state.content.concat([action.payload])
            });
        default:
            return state;
    }
}

export default MainReducer;
