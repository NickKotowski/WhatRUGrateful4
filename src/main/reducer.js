const Reducer = (state = {currentPage: "enter"}, action) => {
    switch (action.type) {
        case "navigateTo":
            return Object.assign({}, state, {
                currentPage: action.payload
            });
        default:
            return state;
    }
}

export default Reducer;
