//User dashboard page
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Auth from '../utils/auth';

//react components
import DataTable from '../components/DataTable';
import TeamInfo from '../components/TeamInfo';

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

	//https://stackoverflow.com/questions/49317582/how-to-chain-two-graphql-queries-in-sequence-using-apollo-client
	// to chain two useQuery statements together, you have to use the skip property

	//gets the league_id returned from the user via the ME query
	const { data: { me: { league_id: { _id } = {}, _id: userId, username: username } = {} } = {}, loading } = useQuery(ME);
	//sets it as the variables object for the GET_LEAGUE query
	const variables = { id: _id };
	//sets the skip property to skip if _id is undefined
	const skip = _id === undefined;
	//gets the league data via the GET_LEAGUE query, but waits til the ME query fully resolves
	const { data: leagueData } = useQuery(GET_LEAGUE, { variables, skip });

	console.log(leagueData);

	//if leagueData is undefined, display LOADING
	if (!leagueData) {
		return (
			<div>LOADING!</div>
		)
	}

	return (
		<main>
			This is the Dashboard
			<Row>
				<Container className='p-3'>This is the League Info Component</Container>
			</Row>
			<Row>
				<Container className='col-4 p-3'><TeamInfo teams={leagueData.getLeague.teams}/></Container>
				<Container className='col-8 p-3'>
					<DataTable username={username} playerData={leagueData.getLeague.player_pool} teams={leagueData.getLeague.teams} />
				</Container>
			</Row>
			
			
		</main>
	);
};

export default Dashboard;
