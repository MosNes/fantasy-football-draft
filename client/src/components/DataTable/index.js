import React from 'react';
import { Table, Button } from 'react-bootstrap'

const DataTable = ({ leagueData }) => {

    const handleDraft = (event) => {
        event.preventDefault();
    }

    return (
        <Table hover>
            <thead>
                <tr>
                    <th>
                        Name
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
                {leagueData &&
                    //map through each player and render it as a row on table
                    leagueData.getLeague.player_pool.map((player) => {

                        //only create a row if drafted === false
                        if (!player.drafted) {
                            return (
                                //create key for reference
                                <tr key={player._id}>
                                    <td>{player.name}</td>
                                    <td>{player.team}</td>
                                    <td className='text-center'>{player.position}</td>
                                    <td className='text-center'>{player.projected_points}</td>
                                    <td><Button>Draft</Button></td>
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