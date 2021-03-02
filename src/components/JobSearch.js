
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeJobSearch, detailedJob } from '../actions/allActions'
import { Divider, H1JobsDiv } from './Styles' // import styled-component
import { Button } from 'react-bootstrap'
import ShowAllJobs from './ShowAllJobs'
import ShowDetailedJob from './ShowDetailedJob'
import { countries, us } from '../data/countries'

const JobSearch = () => {
  // getting global state
  const jobsInState = useSelector(state => state.searchedJobs.results)
  const stateDetailedJob = useSelector(state => state.detailedJob)
  const nrOfJobs = useSelector(state => state.searchedJobs.total)
  const pageCount = useSelector(state => state.searchedJobs.page_count)
  const currentPage = useSelector(state => state.searchedJobs.page)

  console.log(jobsInState);

  // receive dispatch functions
  const dispatch = useDispatch()

  // set form input to local storage
  const [pickedCity, setPickedCity] = useState('Atlanta');
  const [pickedCountry, setPickedCountry] = useState('GA');
  const [checkEntry, setCheckEntry] = useState(false);
  const [checkMid, setCheckMid] = useState(false);
  let pageNumber = 1;

  // API calls
  const handleSearch = (e) => {
    e.preventDefault();
    const getCity = async () => {
      let cityUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickedCity} ${pickedCountry}.json?access_token=${process.env.REACT_APP_MAPTOKEN}`;
      const reponse = await fetch(cityUrl);
      const cityAPIData = await reponse.json();
      let searchForCity = cityAPIData.features[0].text;
      console.log(searchForCity);
      getJobs(searchForCity, pickedCountry, checkEntry, checkMid);
    };
    getCity();

    const getJobs = async (searchForCity, pickedCountry, checkEntry, checkMid) => {
      let jobsUrl = "";
      if ((checkEntry === true) && (checkMid === false)) {
        jobsUrl = `https://www.themuse.com/api/public/jobs?category=Data%20Science&category=Engineering&level=Entry%20Level&location=${searchForCity}%2C%20${pickedCountry}&location=Flexible%20%2F%20Remote&page=${pageNumber}&api_key=${process.env.REACT_APP_THEMUSE}`;
      }
      else if ((checkEntry === false) && (checkMid === true)) {
        jobsUrl = `https://www.themuse.com/api/public/jobs?category=Data%20Science&category=Engineering&level=Mid%20Level&location=${searchForCity}%2C%20${pickedCountry}&location=Flexible%20%2F%20Remote&page=${pageNumber}&api_key=${process.env.REACT_APP_THEMUSE}`;
      }
      else {
        jobsUrl = `https://www.themuse.com/api/public/jobs?category=Data%20Science&category=Engineering&level=Entry%20Level&level=Mid%20Level&location=${searchForCity}%2C%20${pickedCountry}&location=Flexible%20%2F%20Remote&page=${pageNumber}&api_key=${process.env.REACT_APP_THEMUSE}`;
      }

      const reponse = await fetch(jobsUrl);
      const jobsAPIData = await reponse.json();
      console.log(jobsAPIData);
      dispatch(storeJobSearch(jobsAPIData))
    };

  }


  // make options in the dropdown for all countries and US states
  let usStates = us.map((el) => {
    return <option key={el.abbreviation} value={el.abbreviation}>US, {el.name}</option>
  })
  let allCountries = countries.map((el) => {
    return <option key={el} value={el}>{el}</option>
  })

  return (
    <>
      <div className="row bbDiv mb-3 mx-0 d-flex justify-content-center align-items-center">
        <div className="col-10 ">
          <H1JobsDiv className="my-4">
            <h2>Search for Developer Jobs!</h2>
          </H1JobsDiv>
          <div>
            <form onSubmit={handleSearch} className="d-flex align-items-center justify-content-center flex-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="City..." className="form-control input-lg" onChange={(e) => { setPickedCity(e.target.value) }} />
              </div>
              {/* end input field */}
              <div className="form-group-select">
                <label>Country/State</label>
                <select className="form-select form-select-lg" onChange={(e) => { setPickedCountry(e.target.value) }}>
                  <option value="" >-----------------</option>
                  {usStates}{allCountries}
                </select>
              </div>
              {/* end select field */}

              <div className="form-group-check">
                <label>Level</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" onChange={(e) => { setCheckEntry(e.target.checked) }} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Entry
  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" onChange={(e) => { setCheckMid(e.target.checked) }} />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Mid
  </label>
                </div>
              </div>
              {/* end checkboxes section */}
              <Button type='submit' className='buttonApp' variant="primary" size="lg">Search</Button>
            </form>
            <p>*Because of API limitations(free version), at the moment you can only search for jobs in Atlanta GA!</p>
          </div>
        </div>
      </div>

      {/* end row for forms */}


      <div className="row jobsDiv mb-5 mx-0">

        <div className="col-4 px-0 offset-1 jobsContainer">
          {(jobsInState.length > 0) ? <p className="totalP my-0 pl-4"><b>Found {nrOfJobs} jobs</b></p> : ''}
          <ul className="px-0 my-0  jobsUl">
            {(jobsInState.length > 0) ? <ShowAllJobs jobsInState={jobsInState} /> : ""}
          </ul>
          {(pageCount - currentPage) > 0 ?
            <div>
              <Button className="buttonApp mt-1 mb-5" onClick={(e) => {
                // pageNumber++;
                // handleSearch(e);
                console.log(pageNumber);
              }
              }>Load more jobs</Button>
            </div>
            :
            ''
          }
        </div>
        {/* end jobs col */}

        <div className="col-1 ">
          <Divider></Divider>
        </div>
        {/* end divider col */}

        <div className="col-5  oneJobDetails" >

          {(stateDetailedJob === null) ? "" : <ShowDetailedJob />}

        </div>
        {/* end oneJob col */}

      </div>
      {/* end row */}
    </>
  )
}

export default JobSearch
