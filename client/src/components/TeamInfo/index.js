import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_TEAM } from '../../utils/queries';

const TeamInfo = ({ team }) => {

    const { data: teamData, loading } = useQuery(GET_TEAM, {
        variables: { _id: team._id }
    });

    if (loading) {
        return (<div>LOADING!</div>)
    }

    return (
        <div>
            <div>Teams</div>
            <Card>
                <Card.Body>
                    <Card.Title>
                        {teamData.getTeam.name}
                    </Card.Title>
                    <Card.Subtitle>
                        Owned by {teamData.getTeam.owner}
                    </Card.Subtitle>
                    <Card.Subtitle>
                       Players {teamData.getTeam.playerCount} / 15
                    </Card.Subtitle>
                    <ListGroup variant="flush">
                        {teamData.getTeam.players.map( (player) => {
                            return (
                                <ListGroup.Item key={player._id}>
                                    {player.name} - {player.position}
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
        

    )
};

export default TeamInfo;