//Header component
import React from 'react';
import Auth from '../../utils/auth';
import { Navbar, Nav} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './header.css';


const Header = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    return (
        <section className='hero'>
        <div>
                <h1>Football Fantasy</h1>
        </div>
        <Navbar bg="dark" variant={"dark"} expand="lg" className="px-3">
            
                <Navbar.Collapse className='justify-content-end'>
                <Nav
                    className="my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {Auth.loggedIn() ? (
                        <>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>                            
                            <Nav.Link as={Link} onClick={logout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                        </>
                    )}

                </Nav>
                </Navbar.Collapse>

        </Navbar>
        </section>
    )
};

export default Header;