

// gets called by actions
// reducer returns a new global state
// reducer must be passed into Store in the index file
const reducer = (state, action) => {
    switch (action.type) {
        // case "INCREMENT":
        //     return {
        //         ...state,
        //         counter: state.counter + action.data
        //     }
        default:
            return state;
    }
}

export default reducer