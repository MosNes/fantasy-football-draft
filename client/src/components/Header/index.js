//Header component
import React from 'react';
import Auth from '../../utils/auth';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './header.css';
// import Home from '../../pages/Home';
// import Dashboard from '../../pages/Dashboard';
// import Login from '../../pages/Login';
// import Signup from '../../pages/Signup';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    return (
        <nav>
            <div>

                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Navbar.Brand href="#">Fantasy Football</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </nav>

    )

}
export default Header;