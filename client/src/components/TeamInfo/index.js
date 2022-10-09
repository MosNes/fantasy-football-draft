import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const TeamInfo = ({ teams, username }) => {

    return (
        <div>
            {/* returns a card for each team in the teams array */}
            {teams.map((team) => {
                return (
                    // if the team belongs to the current user, highlight card in green
                    <Card key={team._id} className="mb-3" bg={username === team.owner ? 'success' : 'secondary'} text='white'>
                        <Card.Body>
                            <Card.Title className='display-6'>
                                {team.name}
                            </Card.Title>
                            <Card.Subtitle className='mt-1'>
                                Owned by {team.owner}
                            </Card.Subtitle>
                            <Card.Subtitle  className='mt-1'>
                                Players {team.playerCount} / 15
                            </Card.Subtitle>
                            <ListGroup className='mt-3'>
                                {team.players.map((player) => {
                                    return (
                                        <ListGroup.Item key={player._id} variant='dark'>
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