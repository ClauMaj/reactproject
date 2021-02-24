
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






// exporting individual fnct. When importing link use the name of the action