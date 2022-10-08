//Wrapper for the Dashboard Page

//checks to see if the user has a league ID. If League ID is null, it renders the Create League form. If League ID is not null, it renders the Dashboard

import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { ME } from '../utils/queries';

import Dashboard from './Dashboard';
import LeagueForm from '../components/LeagueForm';
import JoinLeague from '../components/JoinLeague';

const PreDashboard = () => {

    const { data: { me: { league_id: leagueId, _id: userId, username } = {} } = {}, loading } = useQuery(ME);

    if (loading) {
        return (
            <div className='text-white'>LOADING!</div>
        )
    }

    if (leagueId === null) {
        return (
            <Container>
                <div className='text-white'>You aren't part of a league.</div>
                <div className='text-white'>Please create or join a league below.</div>
                <Row className='mt-3'>
                    <LeagueForm />
                </Row>
                <Row>
                    <JoinLeague />
                </Row>

            </Container>

        )

    }

    //passes user data to Dashboard as props
    return (
        <Dashboard leagueId={leagueId._id} userId={userId} username={username} />
    )

}

export default PreDashboard;