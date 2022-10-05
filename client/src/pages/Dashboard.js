//User dashboard page
import React, { Profiler } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import Auth from '../utils/auth';

//react components
import DataTable from '../components/DataTable';

import {useQuery, useMutation} from '@apollo/client';

//import any queries to populate Dashboard with user data
import { GET_LEAGUE, ME } from '../utils/queries';

//import any mutations to manipulate user data
import { ADD_PLAYER, START_DRAFT, SET_ACTIVE_USER, END_DRAFT } from '../utils/mutations';

const Dashboard = () => {

    const { league_id: leagueParam } = useParams();

    const { leagueLoading, leagueData } = useQuery( GET_LEAGUE, {
        variables: { _id: leagueParam }
    });

    const { userLoading, userData } = useQuery( ME );

    const user = userData?.me || {};

    const league = leagueData?.getLeague || {};

    return (
        <main>
            This is the Dashboard
            {console.log(user)}
            <DataTable/>
        </main>
    )

};

export default Dashboard;