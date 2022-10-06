import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_TEAM } from '../../utils/queries';

const TeamInfo = ({ teams }) => {

    // const { data: teamData, loading } = useQuery(GET_TEAM, {
    //     variables: { _id: team._id }
    // });

    // if (loading) {
    //     return (<div>LOADING!</div>)
    // }

    return (
        <div>
            <div>Teams</div>
            {/* returns a card for each team in the teams array */}
            {teams.map((team) => {
                return (
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                {team.name}
                            </Card.Title>
                            <Card.Subtitle>
                                Owned by {team.owner}
                            </Card.Subtitle>
                            <Card.Subtitle>
                                Players {team.playerCount} / 15
                            </Card.Subtitle>
                            <ListGroup variant="flush">
                                {team.players.map((player) => {
                                    return (
                                        <ListGroup.Item key={player._id}>
                                            {player.name} - {player.position}
                                        </ListGroup.Item>
                                    )
                                })}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                )
            })}

        </div>


    )
};

export default TeamInfo;