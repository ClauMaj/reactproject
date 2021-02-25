import React from 'react'
import { useDispatch } from 'react-redux'
import { detailedJob } from '../actions/allActions'


const ShowAllJobs = ({ jobsInState }) => {
    // receive dispatch functions
    const dispatch = useDispatch()
    return (
        <>
            {jobsInState.map((job) => {
                return (<li key={job.id} className="pt-3 px-2 jobsLi" >
                    <h5 id={job.id} className="h5Li" onClick={(e) => {
                        dispatch(detailedJob(e.target.id));
                    }}>{job.name}</h5>

                    <div className=" w-100 d-flex justify-content-between flex-row"><h6>@{job.company.name} </h6><h6>level: {job.levels.map((el) => {
                        return el.short_name
                    }).join('/')}</h6> </div>

                    <div className="mb-2 w-100 d-flex justify-content-between flex-row"><h6>{job.locations.map((el) => {
                        return el.name
                    }).join('/')}</h6> <h6 className="h6Date"> {job.publication_date.slice(0, 10)}</h6></div>
                    <p> {job.contents.replace(/<[^>]*>?/gm, '').slice(0, 100)}...</p>
                </li>)
            }
            )}

        </>
    )
}

export default ShowAllJobs
