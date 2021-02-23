
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userCity } from '../actions/allActions'
import { Divider } from './Styles' // import styled-component
import { Button, Form, Col, Dropdown, DropdownButton } from 'react-bootstrap' // import styled-component
import ShowAllJobs from './ShowAllJobs'
import { countries, us } from '../data/countries'

const Hooks = () => {

  // useEffect(() => {
  //   const getData = async () => {
  //     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${selectedCity}.json?access_token=${process.env.REACT_APP_MAPTOKEN}`;
  //     const reponse = await fetch(url);
  //     const data = await reponse.json();
  //     console.log(data);
  //   };
  //   getData();
  // }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const url = "https://www.themuse.com/api/public/jobs?category=Data%20Science&category=Engineering&level=Entry%20Level&level=Mid%20Level&location=Atlanta%2C%20GA&location=Flexible%20%2F%20Remote&location=Houston%2C%20TX&page=1";
  //     const reponse = await fetch(url);
  //     const data = await reponse.json();
  //     console.log(data);
  //   };
  //   getData();
  // }, []); // end useEffect - very important to set the array (tracked var) after so it only gets triggered once

  // receive dispatch functions
  const dispatch = useDispatch()


  // make options in the dropdown for all countries and US states
  let usStates = us.map((el) => {
    return <option value={el.abbreviation}>US, {el.name}</option>
  })
  let allCountries = countries.map((el) => {
    return <option value={el}>{el}</option>
  })

  return (
    <>
      {/* <button onClick={() => dispatch(userCity(4))}>Click me</button> */}
      <div className="row bbDiv mb-3 mx-0 d-flex justify-content-center align-items-center">
        <div className="col-10 ">
          <h2>Search for Developer Jobs!</h2>
          <div>
            <form onSubmit="" className="d-flex align-items-center justify-content-center flex-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control input-lg" />
              </div>
              {/* end input field */}
              <div className="form-group-select">
                <label>Country/State</label>
                <select className="form-select form-select-lg" required>
                  <option value="" >-----------------</option>
                  {usStates}{allCountries}
                </select>
              </div>
              {/* end select field */}

              <div className="form-group-check">
                <label>Level</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Entry
  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Mid
  </label>
                </div>
              </div>



              <Button type='submit' className='buttonApp' variant="primary" size="lg">Search</Button>
            </form>
          </div>
        </div>
      </div>
      {/* end row for forms */}


      <div className="row jobsDiv mx-0">
        <div className="col-4 offset-1 jobsContainer">


        </div>
        {/* end jobs col */}

        <div className="col-1 ">
          <Divider></Divider>
        </div>
        {/* end divider col */}

        <div className="col-5 jobsContainer">


        </div>
        {/* end oneJob col */}

      </div>
      {/* end row */}
    </>
  )
}

export default Hooks
