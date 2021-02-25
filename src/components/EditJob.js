
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setJobToEdit, saveEditedJob } from '../actions/allActions'
import { Button } from 'react-bootstrap' // import styled-component
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"



const EditJob = (props) => {
    // getting global state
    const setStateJobToEdit = useSelector(state => state.setJobToEdit)
    const dateFromState = useSelector(state => state.setJobToEdit.date)
    let startDate = new Date(dateFromState)

    // receive dispatch functions
    const dispatch = useDispatch()

    const handleChange = (data, inputType) => {
        let newEditJob = setStateJobToEdit
        switch (inputType) {
            case "jobTitle":
                newEditJob = {
                    ...setStateJobToEdit,
                    jobTitle: data,
                }
                break;
            case "company":
                newEditJob = {
                    ...setStateJobToEdit,
                    company: data,
                }
                break;
            case "location":
                newEditJob = {
                    ...setStateJobToEdit,
                    location: data,
                }
                break;
            case "active":
                newEditJob = {
                    ...setStateJobToEdit,
                    active: true,
                    rejected: false,
                    interview: false,
                }
                break;
            case "rejected":
                newEditJob = {
                    ...setStateJobToEdit,
                    active: false,
                    rejected: true,
                    interview: false,
                }
                break;
            case "interview":
                newEditJob = {
                    ...setStateJobToEdit,
                    active: false,
                    rejected: false,
                    interview: true,
                }
                break;
            case "date":
                newEditJob = {
                    ...setStateJobToEdit,
                    date: data,
                }
                break;
            case "link":
                newEditJob = {
                    ...setStateJobToEdit,
                    link: data,
                }
                break;
            case "from":
                newEditJob = {
                    ...setStateJobToEdit,
                    from: data,
                }
                break;
            case "notes":
                newEditJob = {
                    ...setStateJobToEdit,
                    notes: data,
                }
                break;
            default:
                newEditJob = setStateJobToEdit;
        }
        dispatch(setJobToEdit(newEditJob))
    }

    const clearForm = () => {
        dispatch(setJobToEdit({
            jobTitle: "",
            company: "",
            location: "",
            date: new Date(),
            active: true,
            rejected: false,
            interview: false,
            link: "",
            from: "",
            notes: "",
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveEditedJob(setStateJobToEdit));
        clearForm();
        props.setModalShow(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* start Job title and company */}
                <div className="row my-2">
                    <div className="form-group col-md-5">
                        <label htmlFor="jobTitle">Job title</label>
                        <input value={setStateJobToEdit.jobTitle} type="text" className="form-control" id="jobTitle" placeholder="Job title" onChange={(e) => { handleChange(e.target.value, "jobTitle") }} />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="company">Company</label>
                        <input value={setStateJobToEdit.company} type="text" className="form-control" id="company" placeholder="Company" onChange={(e) => { handleChange(e.target.value, "company") }} />
                    </div>
                </div>
                {/* end Job title and company */}

                {/* start Location Date and Status */}
                <div className="row my-2">
                    <div className="form-group col-md-5">
                        <label htmlFor="location">Location</label>
                        <input value={setStateJobToEdit.location} type="text" className="form-control" id="location" placeholder="Location" onChange={(e) => { handleChange(e.target.value, "location") }} />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="appDate">Application date</label>
                        <DatePicker id="appDate" selected={startDate} onChange={(date) => { handleChange(date, "date") }} />
                    </div>

                    {/* start Radio buttons */}
                    <div className=" col-lg-3">
                        <div className="form-group-check-status">
                            <label>Status</label>
                            <div className="form-check">
                                <input checked={setStateJobToEdit.active} className="form-check-input" name="status" id='active' type="radio" onChange={(e) => { handleChange(e.target.checked, "active") }} />
                                <label className="form-check-label" htmlFor="active">
                                    <b>Active</b>
                                </label>
                                <input checked={setStateJobToEdit.rejected} className="form-check-input ml-2" name="status" id='rejected' type="radio" onChange={(e) => { handleChange(e.target.checked, "rejected") }} />
                                <label className="form-check-label ml-4" htmlFor="rejected">
                                    <b>Rejected</b>
                                </label>
                            </div>
                            <div className="form-check">
                                <input checked={setStateJobToEdit.interview} className="form-check-input" name="status" id='interview' type="radio" onChange={(e) => { handleChange(e.target.checked, "interview") }} />
                                <label className="form-check-label" htmlFor="interview">
                                    <b>Interview process</b>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* end Radio buttons */}

                </div>
                {/* end Location Date and Status */}

                {/* start Link Applied From */}
                <div className="row my-2">
                    <div className="form-group col-md-5">
                        <label htmlFor="link">Original job post</label>
                        <input value={setStateJobToEdit.link} type="text" className="form-control" id="link" placeholder="Link" onChange={(e) => { handleChange(e.target.value, "link") }} />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="via">Applied from</label>
                        <input value={setStateJobToEdit.from} type="text" className="form-control" id="from" placeholder="From" onChange={(e) => { handleChange(e.target.value, "from") }} />
                    </div>
                </div>
                {/* end Link Applied From */}

                {/* start Notes and button */}
                <div className="row my-2">
                    <div className="form-group col-8">
                        <label htmlFor="notes">Notes</label>
                        <textarea value={setStateJobToEdit.notes} type="text" rows="4" className="form-control" id="notes" placeholder="Notes" onChange={(e) => { handleChange(e.target.value, "notes") }} />
                    </div>
                    <div className=" col-2 d-flex align-items-center justify-content-around flex-column">
                        <Button variant="success" type="submit">Save changes</Button>
                    </div>
                </div>
                {/* end Notes and button */}
            </form>
        </>
    )
}

export default EditJob
