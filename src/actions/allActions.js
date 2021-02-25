
// an action creator, return an object with TYPE and data
export const storeJobSearch = (data) => {
    return {
        type: "STOREJOBSEARCH",
        data: data
    }
}

export const detailedJob = (id) => {
    return {
        type: "DETAILEDJOB",
        data: id
    }
}

export const startAddJobForm = () => {
    return {
        type: "STARTADDJOBFORM",
    }
}

export const tempJobForm = (data) => {
    return {
        type: "TEMPJOBFORM",
        data: data,
    }
}

export const saveJob = (data) => {
    return {
        type: "SAVEJOB",
        data: data,
    }
}

export const showDetails = (id) => {
    return {
        type: "SHOWDETAILS",
        data: id,
    }
}

export const deleteSavedJob = (id) => {
    return {
        type: "DELETESAVEDJOB",
        data: id,
    }
}

export const setJobToEdit = (data) => {
    return {
        type: "SETJOBTOEDIT",
        data: data,
    }
}
export const saveEditedJob = (data) => {
    return {
        type: "SAVEEDITEDJOB",
        data: data,
    }
}



// exporting individual fnct. When importing link use the name of the action