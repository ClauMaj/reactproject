

// gets called by actions
// reducer returns a new global state
// reducer must be passed into Store in the index file
const reducer = (state, action) => {
    switch (action.type) {
        case "STOREJOBSEARCH":
            return {
                ...state,
                searchedJobs: action.data,
                remainingPages: action.data.page_count - action.data.page,
            }
        case "DETAILEDJOB":
            let oneJob = state.searchedJobs.results.filter((job) => {
                return job.id == action.data
            })
            return {
                ...state,
                detailedJob: oneJob[0],
            }
        default:
            return state;
    }
}

export default reducer