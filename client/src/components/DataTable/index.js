import React from 'react';
import { Table } from 'react-bootstrap'

const DataTable = ({ leagueData }) => {

    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Team
                    </th>
                    <th>
                        Position
                    </th>
                    <th>
                        Projected Points
                    </th>
                    <th>
                        {leagueData &&
                            //map through each player and render it as a row on table
                            leagueData.getLeague
                        }
                    </th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    )

}

export default DataTable;