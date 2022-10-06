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
        league_id {
            _id
        }
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
            league_id {
                _id
            }
            teams {
                _id
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
            league_id {
                _id
            }
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

//gets all leagues
export const GET_LEAGUES = gql`
    query getLeagues {
        getLeagues {
            _id
            name
        }
    }
`;

//gets league by ID
export const GET_LEAGUE = gql`
query getLeague($id: ID!) {
    getLeague(_id: $id) {
      _id
      name
      join_code
      active_user {
        _id
        username
        email
        firstName
        lastName
      }
      users {
        _id
        username
        email
        firstName
        lastName
        teams {
          name
          _id
          owner
        }
      }
      teams {
        _id
        name
        owner
        playerCount
        league_id {
            _id
        }
        players {
          _id
          name
          position
          number
          projected_points
        }
      }
      player_pool {
        _id
        name
        team
        position
        number
        projected_points
        drafted
        league_id
      }
    }
  }
`;