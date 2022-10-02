import { gql } from '@apollo/client';

// ADD ALL CLIENT-SIDE GRAPHQL QUERIES HERE
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
            name
            league_id {
            _id
            }
        }
        }
    }
`;

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