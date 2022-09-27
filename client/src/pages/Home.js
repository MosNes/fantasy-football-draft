//Homepage component
import React from 'react';

import Auth from '../utils/auth';

const Home = () => {
    const loggedIn = Auth.loggedIn();

    return (
        <main>
            Homepage Placeholder
        </main>
    )
};

export default Home;