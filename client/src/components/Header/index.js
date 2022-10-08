//Header component
import React from 'react';
import Auth from '../../utils/auth';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './header.css';


const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    return (
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Navbar.Brand className="text-body" href="/">Football Fantasy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0 justify-content-end"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {Auth.loggedIn() ? (
                                <>
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                    <Nav.Link as={Link} onClick={logout}>Logout</Nav.Link>
                                </> 
                            ):(
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                                </>     
                            )}
                            
                        
                        </Nav>
export default Header;