
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeJobSearch, detailedJob } from '../actions/allActions'
import { Button } from 'react-bootstrap' // import styled-component
import JobForm from './JobForm'

const JobManager = () => {
    // getting global state
    const jobsInState = useSelector(state => state.searchedJobs.results)


    // receive dispatch functions
    const dispatch = useDispatch()

    // set form input to local storage
    const [showAddForm, setshowAddForm] = useState(false);

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
                            setshowAddForm(true)
                        }
                        }>Add job</Button>
                    </div>
                </div>)}
            <div className="row px-0 mx-0">
                <div className="col-10 offset-1">

                </div>
            </div>

        </>
    )
}

export default JobManager
