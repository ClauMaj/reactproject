
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeJobSearch, detailedJob } from '../actions/allActions'
import { Button } from 'react-bootstrap' // import styled-component


const JobForm = () => {
    // getting global state
    const jobsInState = useSelector(state => state.searchedJobs.results)


    // receive dispatch functions
    const dispatch = useDispatch()

    // set form input to local storage
    const [pickedCity, setPickedCity] = useState('Atlanta');







    return (
        <>
            <form>
                <div className="row">
                    <div className="form-group col-md-5">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
      </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add application</button>
            </form>
        </>
    )
}

export default JobForm
