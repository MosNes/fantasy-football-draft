import React from 'react';
import { Table, Button } from 'react-bootstrap';

import { ADD_PLAYER, SET_ACTIVE_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';


const DataTable = ({ leagueId, playerData, teams, username, activeUserId, userId }) => {

    //finds the logged in user's team by filtering the array of teams in the league and matching the one where the owner = user's username
    const userTeam = teams.filter( team => team.owner === username)[0];

    // const userData = useQuery(ME);

    const [ addPlayer, { error }] = useMutation(ADD_PLAYER);

    const [ setActiveUser, { activeUserError }] = useMutation(SET_ACTIVE_USER);

    const handleAddPlayer = async (event, playerId, teamId) => {
        event.preventDefault();

        try {
            await addPlayer({
                variables: { playerId, teamId }
            });
            await setActiveUser({
                variables: {league_id: leagueId}
            })
            document.location.reload();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Table hover variant="dark">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Number
                    </th>
                    <th>
                        Team
                    </th>
                    <th className='text-center'>
                        Position
                    </th>
                    <th className='text-center'>
                        Projected Points
                    </th>
                    <th>

                    </th>
                </tr>
            </thead>
            <tbody>
                {playerData &&
                    //map through each player and render it as a row on table
                    playerData.map((player) => {
                        //only create a row if drafted === false
                        if (!player.drafted) {
                            return (
                                //create key for reference
                                <tr key={player._id}>
                                    <td>{player.name}</td>
                                    <td className=''>{player.number}</td>
                                    <td>{player.team}</td>
                                    <td className='text-center'>{player.position}</td>
                                    <td className='text-center'>{player.projected_points}</td>
                                    {/* on click pass player._id to handleAddPlayer function */}
                                    { activeUserId === userId ? (
                                        <td><Button onClick={event => handleAddPlayer(event, player._id, userTeam._id)}>Draft</Button></td>
                                    ) : (
                                        <td><Button disabled className='btn-secondary'>Draft</Button></td>
                                    )}
                                    
                                </tr>
                            )
                        }
                    })
                }
            </tbody>
        </Table>
    )

}

export default DataTable;