//collects all GraphQL mutations that change data in the database
//these mutations are used by the useMutation hook in individual components to make GraphQL queries to the DB
import { gql } from "@apollo/client";

//ADD ALL CLIENT-SIDE GRAPHQL MUTATIONS HERE
export const LOGIN_USER = gql`
    mutation login($email:String!, $password:String!){
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
            firstName
            lastName
            league_id
            teams {
                name
                league_id {
                    _id
                    }
                }  
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $firstName: String!, $lastName: String!, $password: String!) {
        addUser(username: $username, email: $email, firstName: $firstName, lastName: $lastName, password: $password) {
        token
        user {
                _id
                username
                firstName
                lastName
                league_id
            }
        }
    }
`;

export const CREATE_TEAM = gql`
mutation createTeam($name: String!, $leagueId: ID!) {
    createTeam(name: $name, league_id: $leagueId) {
      _id
      name
      owner
      league_id {
        _id
        name
      }
    }
  }
`;

