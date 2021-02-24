
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddJobForm } from '../actions/allActions'
import { Button } from 'react-bootstrap' // import styled-component
import JobForm from './JobForm'

const JobManager = () => {
    // getting global state
    const jobsInState = useSelector(state => state.searchedJobs.results)
    const showAddForm = useSelector(state => state.startAddJobForm)

    // receive dispatch functions
    const dispatch = useDispatch()

    // set form input to local storage

    return (
        <>
            {showAddForm
                ?
                (<div className="row px-0 mx-0 mt-4">
                    <div className="col-8 offset-2">
                        <JobForm />
                    </div>
                </div>)
                :
                (<div className="row px-0 mx-0 mt-4">
                    <div className="col-6 offset-3">
                        <Button style={{ backgroundColor: "#414153", color: "#ff6347", border: "none" }} size="lg" block onClick={() => {
                            dispatch(startAddJobForm())
                        }
                        }>Add job</Button>
                    </div>
                </div>)}
            {/* end show button/form ternary */}

            <div className="row px-0 mx-0">
                <div className="col-10 offset-1">
                    <h1>Current jobs</h1>
                    <ul>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default JobManager
