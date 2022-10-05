import React from 'react';
import { Table } from 'react-bootstrap'

const DataTable = () => {

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
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    )

}

export default DataTable;