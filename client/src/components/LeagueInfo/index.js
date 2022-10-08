import React from 'react';
import { Alert, Button } from 'react-bootstrap';

import { END_DRAFT, START_DRAFT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const LeagueInfo = ({ leagueData, userId }) => {
	console.log('active user: ', leagueData.active_user);

    const [ startDraft, { startError} ] = useMutation(START_DRAFT);

    const [ endDraft, { endError } ] = useMutation(END_DRAFT);

    const startDraftHandler = async () => {

        try {
            await startDraft({
                variables: { league_id: leagueData._id }
            });
            document.location.reload();
        } catch (e) {
            console.error(e)
        }

    };

    const endDraftHandler = async () => {
        try {
            await endDraft({
                variables: { leagueId: leagueData._id }
            });
            document.location.reload();
        } catch (e) {
            console.error(e)
        }
    };



	return (
		<div>
			<h2 className='display-3'>{leagueData.name}</h2>
			<h5 className="">Join Code: {leagueData.join_code}</h5>
			{!leagueData.active_user ? (
				<Alert variant="secondary" className="text-center mt-4">
					The Draft has not started yet.
				</Alert>
			) : leagueData.active_user._id === userId ? (
				<Alert variant="success" className="text-center mt-4">
					It's your pick!
				</Alert>
			) : (
				<Alert variant="warning" className="text-center mt-4">
					It's {leagueData.active_user.username}'s turn to pick!
				</Alert>
			)}
			<div className="d-grid gap-2">
				{!leagueData.active_user ? (
					<Button className="btn-success btn-lg" onClick={startDraftHandler}>
                        Start Draft
                        </Button>
				) : (
					<Button className="btn-danger btn-lg" onClick={endDraftHandler}>
                        End Draft
                        </Button>
				)}
			</div>
		</div>
	);
};

export default LeagueInfo;
