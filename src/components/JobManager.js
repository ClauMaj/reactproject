
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddJobForm } from '../actions/allActions'
import { Button } from 'react-bootstrap'
import { H1JobsDiv } from './Styles' // import styled-component
import JobForm from './JobForm'
import ManagedJobs from './ManagedJobs'


const JobManager = () => {
    // getting global state
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

            <div className="row mt-5 px-0 mx-0">
                <div className="col-10 flex-column px-0 offset-1 d-flex align-items-center justify-content-center">
                    <H1JobsDiv >
                        <h1 >Currently Managed Jobs</h1>
                    </H1JobsDiv>
                    <ol className="my-4 w-100 px-0" start="0">
                        <ManagedJobs />
                    </ol>
                </div>
            </div>

        </>
    )
}

export default JobManager
