//User dashboard page
import React, { Profiler, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LeagueForm from '../components/LeagueForm';

import Auth from '../utils/auth';

//react components
import DataTable from '../components/DataTable';

import { useQuery, useMutation } from '@apollo/client';

//import any queries to populate Dashboard with user data
import { GET_LEAGUE, ME, GET_PLAYERS } from '../utils/queries';

//import any mutations to manipulate user data
import {
	ADD_PLAYER,
	START_DRAFT,
	SET_ACTIVE_USER,
	END_DRAFT,
} from '../utils/mutations';

const Dashboard = () => {
	const { leagueId: leagueParam } = useParams();

	const leagueQuery = useQuery(GET_LEAGUE, {
		variables: { id: leagueParam },
	});

	// const { userLoading, userData } = useQuery(ME);

	
	// console.log('testData', testData);
	// console.log('error', error);
	// const user = userData?.me || {};

    const testData = useQuery(GET_PLAYERS);

	// useEffect(() => {
	// 	console.log('... testData', testData);
	// }, [testLoading, testData]);

	// const league = leagueData?.getLeague || {};
	// const league = leagueData;

	const leagueData = leagueQuery.data?.getLeague || {};

	return (
		<main>
			This is the Dashboard
			{console.log(leagueParam)}
			{console.log('test', leagueData)}
			<LeagueForm/>
			<DataTable />
		</main>
	);
};

export default Dashboard;
