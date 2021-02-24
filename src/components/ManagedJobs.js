
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { JobLi } from './Styles' // import styled-component


const ManagedJobs = () => {
    // getting global state
    const managedJobs = useSelector(state => state.savedJobs)

    // receive dispatch functions
    const dispatch = useDispatch()

    // set form input to local storage

    return (
        <>
            {managedJobs.map((job) => {
                return (<JobLi>hi</JobLi>)
            })}

        </>
    )
}

export default ManagedJobs
