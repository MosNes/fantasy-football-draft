import React from 'react';
import { Table, Button } from 'react-bootstrap';

import { ADD_PLAYER } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { ME } from '../../utils/queries';

const DataTable = ({ playerData, teams, username }) => {

    console.log("teams :", teams);

    //finds the logged in user's team by filtering the array of teams in the league and matching the one where the owner = user's username
    const userTeam = teams.filter( team => team.owner === username)[0];

    // const userData = useQuery(ME);

    const [ addPlayer, { error }] = useMutation(ADD_PLAYER);

    const handleAddPlayer = async (event, playerId, teamId) => {
        console.log(playerId)
        event.preventDefault();

        try {
            await addPlayer({
                variables: { playerId, teamId }
            });
            document.location.reload();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Table hover>
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
                                    <td><Button onClick={event => handleAddPlayer(event, player._id, userTeam._id)}>Draft</Button></td>
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