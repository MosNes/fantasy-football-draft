//Header component
import React from 'react';
//************import bootstrap and react-bootstrap*****
import Auth from '../../utils/auth';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import{BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

export default class Header extends Component {
    render() { 
return (
        <Router>
        <div>

            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Navbar.Brand href="#">Navbar Demo Arjun Codes</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
        <div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>
)
}
} 
// const Header = () => {

//     //logout function
//     const logout = event => {
//         event.preventDefault();
//         Auth.logout();
//     }

    //     <Navbar bg="light" expand="lg">
    //     <Container>
    //       <Navbar.Brand to="/">Fantasy Football</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //         {Auth.loggedIn() ? (
    //             <>
    //           <Nav.Link to="/home">Home</Nav.Link>
    //           <a href="/" onClick={logout}>
    //           Logout
    //       </a>
    //       </>
    //       ) : (
    //         <Nav className="me-auto">
    //           <Nav.Link to="/dashboard">Dashboard</Nav.Link>
    //           <Nav.Link  to="/login">Login</Nav.Link>
    //           <Nav.Link to="/signup">Signup</Nav.Link>

         
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>

        // <header className="bg-secondary mb-4 py-2 flex-row align-center">
        //     <div className="container flex-row justify-space-between-lg justify-center align-center">
        //         <Link to="/">
        //             <h1>Fantasy Football</h1>
        //         </Link>

        //         <nav className="text-center">
        //             {Auth.loggedIn() ? (
        //                 <>
        //                     <Link to="/home">Home</Link>
        //                     <a href="/" onClick={logout}>
        //                         Logout
        //                     </a>
        //                 </>
        //             ) : (
        //                 <>
        //                     <Link to="/dashboard">Dashboard</Link>
        //                     <Link to="/login">Login</Link>
        //                     <Link to="/signup">Signup</Link>
        //                 </>
        //             )}
        //         </nav>
        //     </div>
        // </header>
//     );
// };

// export default Header;
