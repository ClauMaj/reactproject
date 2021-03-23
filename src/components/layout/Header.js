import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/images/smalllogo.png'
import BigLogo from '../../assets/images/biglogo.png'
import { H1S } from '../Styles' // import styled-component


// regular navbar
const Header = (props) => {
    return (
        <>
            <Navbar fixed="top" className="py-0 navBgc" collapseOnSelect expand="lg" variant="dark" id="responsive-navbar-nav" style={{ backgroundColor: "rgb(26, 120, 163)" }}>
                <Navbar.Brand className="pb-0"><Link to="/"><img className="mainLogo" src={Logo} alt="logo" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" id="responsive-navbar-nav" style={{ backgroundColor: "rgb(26, 120, 163)" }} />
                <Navbar.Collapse id="responsive-navbar-nav" style={{ backgroundColor: "rgb(26, 120, 163)" }}>
                    <Nav className="ml-auto pr-3">
                        <Link className="navLink mx-3" to="/">Home</Link>
                        <Link className="navLink mx-3" to="/jobsearch">Job Search</Link>
                        <Link className="navLink mx-3" to="/jobmanager">My jobs</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <H1S>Job Search<br /> Manager</H1S>
        </>
    );
};

export default Header
