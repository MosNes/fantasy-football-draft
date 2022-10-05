//User dashboard page
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

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

	const userQuery = useQuery(ME);


	// useEffect(() => {
	// 	console.log('... testData', testData);
	// }, [testLoading, testData]);

	// const league = leagueData?.getLeague || {};
	// const league = leagueData;

	const leagueData = leagueQuery.data?.getLeague || {};
	const userData = userQuery.data?.me || {};

	if (userQuery.loading || leagueQuery.loading ) {
		return (
			<div>LOADING!</div>
		)
	}

	return (
		<main>
			This is the Dashboard
			<DataTable leagueData={leagueData}/>
		</main>
	);
};

export default Dashboard;
