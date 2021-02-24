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
            <Navbar fixed="top" className="py-0 navBgc" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand ><Link to="/"><img src={Logo} alt="logo" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto pr-3">
                        <Link className="navLink mx-3" to="/">Home</Link>
                        <Link className="navLink mx-3" to="/jobsearch">Job Search</Link>
                        <Link className="navLink mx-3" to="/jobmanager">My jobs</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <H1S><img className="bigLogo" src={BigLogo} alt="" /></H1S>
        </>
    );
};

export default Header
