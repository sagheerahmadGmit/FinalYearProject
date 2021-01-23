import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/dataTest">Data Test</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>

        // <Navbar bg="light" expand="lg">
        //     <Navbar.Brand to="/">Student Hub</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <NavLink to="/">Home</NavLink>
        //             <NavLink to="/about">About</NavLink>
        //             <NavLink to="/contact">Contact</NavLink>
        //             <NavLink to="/dataTest">Data Test</NavLink>
        //             <NavLink to="/login">Login</NavLink>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    );
}

export default Navigation;