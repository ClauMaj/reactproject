
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { HomeH1, ButtonDiv } from './components/Styles' // import styled-component
import { Button } from 'react-bootstrap' // import styled-component

const App = () => {



  return (
    <>
      <div className="row mx-0">
        <div className="col-8 offset-2">
          <HomeH1>JS Manager is an app where developers can search for coding jobs and manage their job search!</HomeH1>
          <ButtonDiv>
            <Link to="/jobsearch" className=' mx-5'><Button className='buttonApp' variant="primary" size="lg">Job Search</Button></Link>
            <Link to="/jobmanager" className=' mx-5'><Button className='buttonApp' variant="primary" size="lg">Manage your applied jobs</Button></Link>
          </ButtonDiv>
        </div>
      </div>
    </>
  )
}

export default App
