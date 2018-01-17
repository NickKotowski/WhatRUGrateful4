const MainReducer = (state = {content: []}, action) => {
    switch (action.type) {
        case "addNewItem":
            return Object.assign({}, state, {
                content: action.payload
            });
        default:
            return state;
    }
}

export default MainReducer;
