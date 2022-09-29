//Header component
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

    //logout function
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }

    return (
        <header>
            Header placeholder
        </header>
    )
}

export default Header;