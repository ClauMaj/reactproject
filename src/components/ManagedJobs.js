
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { JobLi, TitleLi } from './Styles' // import styled-component
import { showDetails } from '../actions/allActions'
import { Link } from "react-router-dom";
import Green from '../assets/images/green.png'
import Orange from '../assets/images/orange.png'
import Red from '../assets/images/red.png'


const ManagedJobs = () => {
    // getting global state
    const managedJobs = useSelector(state => state.savedJobs)


    // receive dispatch functions
    const dispatch = useDispatch()

    // set form input to local storage

    return (
        <>
            <TitleLi key={0}>
                <div className="row mx-0 mt-4">
                    <div className="col-5"> <b> Job title &#8645;</b></div>
                    <div className="col-2"><b>Company &#8645;</b></div>
                    <div className="col-2"><b>Location &#8645;</b></div>
                    <div className="col-1"><b>Applied &#8645;</b></div>
                    <div className="col-1 d-flex align-items-center justify-content-center"><b>Status</b></div>
                    <div className="col-1 d-flex align-items-center justify-content-center"><b>Edit</b></div>
                </div>
            </TitleLi>
            {managedJobs.map((job) => {
                const oneDay = 24 * 3600 * 1000;
                let currentDate = new Date();
                let jobDate = new Date(job.date)
                let status = Green
                if (job.rejected) {
                    status = Red;
                }
                else if (job.interview) {
                    status = Orange;
                }
                return (<JobLi key={job.id} onClick={() => {
                    dispatch(showDetails(job.id))
                }
                }>
                    <div className="row mx-0">
                        <div className="col-5 ">{job.jobTitle}</div>
                        <div className="col-2">{job.company}</div>
                        <div className="col-2">{job.location}</div>
                        <div className="col-1">{Math.round(Math.abs((jobDate - currentDate) / oneDay))} days ago</div>
                        <div className="col-1 d-flex align-items-center justify-content-center"><img className="statusImage" src={status} alt="" /></div>
                    </div>
                    {job.showDetails ?
                        <div className="row mx-0">
                            <div className="col">
                                <div className="mt-3"><b>Original link </b> - <a href={job.link} target="_blank">{job.link}</a>
                                </div>
                                <div><b>Notes: </b>  <p>{job.notes}</p>
                                </div>
                            </div>
                        </div>
                        :
                        ""}
                </JobLi>)
            })}

        </>
    )
}

export default ManagedJobs
