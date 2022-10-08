import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_TEAM } from '../../utils/queries';

const TeamInfo = ({ teams }) => {

    return (
        <div>
            {/* returns a card for each team in the teams array */}
            {teams.map((team) => {
                return (
                    <Card key={team._id} className="mb-3">
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