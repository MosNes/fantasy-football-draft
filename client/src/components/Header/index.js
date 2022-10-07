//Header component
import React from 'react';
import Auth from '../../utils/auth';
import { Navbar, Nav } from 'react-bootstrap'
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
            <div className='hero'>

                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Navbar.Brand href="#">Football Fantasy</Navbar.Brand>
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
// const Header = () => {

//     //logout function
//     const logout = event => {
//         event.preventDefault();
//         Auth.logout();
//     }

//         <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand to="/">Fantasy Football</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//             {Auth.loggedIn() ? (
//                 <>
//               <Nav.Link to="/home">Home</Nav.Link>
//               <a href="/" onClick={logout}>
//               Logout
//           </a>
//           </>
//           ) : (
//             <Nav className="me-auto">
//               <Nav.Link to="/dashboard">Dashboard</Nav.Link>
//               <Nav.Link  to="/login">Login</Nav.Link>
//               <Nav.Link to="/signup">Signup</Nav.Link>


//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//         <header className="bg-secondary mb-4 py-2 flex-row align-center">
//             <div className="container flex-row justify-space-between-lg justify-center align-center">
//                 <Link to="/">
//                     <h1>Fantasy Football</h1>
//                 </Link>

//                 <nav className="text-center">
//                     {Auth.loggedIn() ? (
//                         <>
//                             <Link to="/home">Home</Link>
//                             <a href="/" onClick={logout}>
//                                 Logout
//                             </a>
//                         </>
//                     ) : (
//                         <>
//                             <Link to="/dashboard">Dashboard</Link>
//                             <Link to="/login">Login</Link>
//                             <Link to="/signup">Signup</Link>
//                         </>
//                     )}
//                 </nav>
//             </div>
//         </header>
//     );
// };

export default Header;