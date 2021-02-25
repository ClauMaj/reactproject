import { v1 as uuidv1 } from "uuid";

// gets called by actions
// reducer returns a new global state
// reducer must be passed into Store in the index file
const reducer = (state, action) => {
    switch (action.type) {
        case "STOREJOBSEARCH":
            let tempResults = state.searchedJobs.results;
            return {
                ...state,
                searchedJobs: { ...action.data, results: [...tempResults, ...action.data.results] },

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
        case "STARTADDJOBFORM":
            return {
                ...state,
                startAddJobForm: !state.startAddJobForm,
            }
        case "TEMPJOBFORM":
            return {
                ...state,
                tempJobForm: action.data,
            }
        case "SAVEJOB":
            let newJob = {
                id: uuidv1(),
                ...action.data,
                isEdit: false,
                showDetails: false,
            }
            return {
                ...state,
                savedJobs: [...state.savedJobs, newJob],
            }
        case "SHOWDETAILS":
            let showDetailsForJob = state.savedJobs.map((job) => {
                return job.id === action.data ? { ...job, showDetails: !job.showDetails } : job;
            });
            return {
                ...state,
                savedJobs: showDetailsForJob
            }
        case "DELETESAVEDJOB":
            let deleteJob = state.savedJobs.filter((job) => {
                return job.id !== action.data;
            });
            return {
                ...state,
                savedJobs: deleteJob
            }
        case "SETJOBTOEDIT":
            // let setJobToEdit = state.savedJobs.filter((job) => {
            //     return job.id === action.data.id;
            // });
            // console.log(setJobToEdit);
            return {
                ...state,
                setJobToEdit: { ...action.data },
            }
        case "SAVEEDITEDJOB":
            let saveEditedJob = state.savedJobs.map((job) => {
                return job.id === action.data.id ? { ...job, jobTitle: action.data.jobTitle, company: action.data.company, location: action.data.location, date: action.data.date, active: action.data.active, rejected: action.data.rejected, interview: action.data.interview, link: action.data.link, from: action.data.from, notes: action.data.notes } : job;
            });
            return {
                ...state,
                savedJobs: saveEditedJob
            }
        default:
            return state;
    }
}

export default reducer