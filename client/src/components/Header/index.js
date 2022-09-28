//Header component
import React from 'react';
//************import bootstrap and react-bootstrap*****
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

    //logout function
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }

    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to="/">
                    <h1>Yay Sports</h1>
                </Link>

                <nav className="text-center">
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/home">Home</Link>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
