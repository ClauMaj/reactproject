
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
    const [pickedCity, setPickedCity] = useState('Atlanta');







    return (
        <>

        </>
    )
}

export default JobManager
