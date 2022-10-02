import { gql } from '@apollo/client';

// ADD ALL CLIENT-SIDE GRAPHQL QUERIES HERE

//get all users
export const GET_USERS = gql`
    query getUsers {
        getUsers {
            username
            firstName
            lastName
            email
        }
    }
`;

//get user by email
export const GET_USER = gql`
    query getUser($email: String!) {
        getUser(email: $email) {
        _id
        username
        firstName
        lastName
        email
        league_id
        teams {
            _id
            name
            league_id {
            _id
            }
        }
        }
    }
`;

//authenticate a user
export const ME = gql`
    query me {
        me {
            _id
            username
            email
            firstName
            lastName
            league_id
            teams {
                name
                players {
                    _id
                    name
                    drafted
                }
                league_id {
                    _id
                    name
                }
            }
        }
    }
`;

//get all players
export const GET_PLAYERS = gql`
    query getPlayers {
        getPlayers {
            _id
            name
            team
            position
            projected_points
            number
        }
    }
`;

//get team by ID
export const GET_TEAM = gql`
    query getTeam($_id: ID!) {
        getTeam( _id: $_id ) {
            name
            league_id
            owner
            playerCount
            players {
                _id
                name
                number
                position
                projected_points
            }
        }
    }
`;