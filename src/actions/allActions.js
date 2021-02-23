
// an action creator, return an object with TYPE and data
export const userCity = (n) => {
    return {
        type: "USERCITY",
        data: n
    }
}

export const jobsData = (n) => {
    return {
        type: "JOBSDATA",
        data: n
    }
}

// exporting individual fnct. When importing link use the name of the action