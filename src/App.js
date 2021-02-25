
import React from 'react'
import { Link } from "react-router-dom";
import { HomeH1, ButtonDiv, H1JobsDiv } from './components/Styles' // import styled-component
import { Button } from 'react-bootstrap' // import styled-component

const App = () => {



  return (
    <>
      <div className="row mx-0">
        <div className="col-8 offset-2">
          <H1JobsDiv>
            <HomeH1>JS Manager is an app where developers can search for coding jobs and manage their job search!</HomeH1>
          </H1JobsDiv>
          <ButtonDiv>
            <Link to="/jobsearch" className=' mx-5'><Button className='buttonApp' variant="primary" size="lg">Job Search</Button></Link>
            <Link to="/jobmanager" className=' mx-5'><Button className='buttonApp' variant="primary" size="lg">Manage your saved jobs</Button></Link>
          </ButtonDiv>
        </div>
      </div>
    </>
  )
}

export default App
