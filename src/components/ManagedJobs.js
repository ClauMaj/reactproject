
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { JobLi, TitleLi } from './Styles' // import styled-component
import { showDetails, deleteSavedJob, setJobToEdit } from '../actions/allActions'
import { Link } from "react-router-dom";
import Green from '../assets/images/green.png'
import Orange from '../assets/images/orange.png'
import Red from '../assets/images/red.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'react-bootstrap'
import EditJob from './EditJob'

const ManagedJobs = () => {
    // getting global state
    const managedJobs = useSelector(state => state.savedJobs)


    // local state for modal
    const [modalShow, setModalShow] = useState(false);

    // receive dispatch functions
    const dispatch = useDispatch()

    // set form input to local storage

    return (
        <>
            <TitleLi key={0}>
                <div className="row mx-0 mt-4">
                    <div className="col-5 wrapLiText"> <b> Job title &#8645;</b></div>
                    <div className="col-2 wrapLiText"><b>Company &#8645;</b></div>
                    <div className="col-2 wrapLiText"><b>Location &#8645;</b></div>
                    <div className="col-1 wrapLiText"><b>Applied &#8645;</b></div>
                    <div className="col-1 d-flex align-items-center justify-content-center wrapLiText"><b>Status</b></div>
                    <div className="col-1 d-flex align-items-center justify-content-center wrapLiText"><b>Edit</b></div>
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
                        <div className="showBtn col-1 d-flex align-items-center justify-content-end">

                            <Button className="deleteEdit" onClick={() => {
                                dispatch(setJobToEdit({
                                    id: job.id,
                                    jobTitle: job.jobTitle,
                                    company: job.company,
                                    location: job.location,
                                    date: job.date,
                                    active: job.active,
                                    rejected: job.rejected,
                                    interview: job.interview,
                                    link: job.link,
                                    from: job.from,
                                    notes: job.notes,
                                }));
                                setModalShow(true);
                            }}>
                                <FontAwesomeIcon icon={["fas", "edit"]} color="orange" />
                            </Button>
                            <Button className="deleteEdit" onClick={() => {
                                dispatch(deleteSavedJob(job.id))
                            }
                            }>
                                <FontAwesomeIcon icon={["fas", "trash"]} color="darkred" />
                            </Button>


                        </div>
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

            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="modalBgc" closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit job entry:
        </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBgc">
                    <EditJob setModalShow={setModalShow} />
                </Modal.Body>
                <Modal.Footer className="modalBgc">
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ManagedJobs
