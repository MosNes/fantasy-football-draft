//import the graphQL tagged template function
const { gql } = require('apollo-server-express');

//---------------CREATE TYPEDEFS-----------------------------------

//should first name/last name in model and here just be a username? or do we want first name/last name?
const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    teams: [Team]
}
type Player {
    _id: ID
    name: String
    team: String
    position: String
    projected_points: Float
    number: Int
}
type Team {
    _id: ID
    teamName: String
    owner: String
    league_id: League
    players: [DraftPlayer]
    playerCount: Int
}
type League {
    _id: ID
    name: String
    users: [User]
    active_user: User
    player_pool: [DraftPlayer]
    join_code: String
}
type DraftPlayer {
    _id: ID
    player: Player
    drafted: Boolean
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
    getUsers: [User]
    getUser(username: String!): User
    getPlayers: [Player]
    getTeam(_id: ID!): Team
    getLeagues: [League]
    getLeague(_id:ID!): League
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, firstName: String!, lastName: String!, password: String!): Auth
    addPlayerToTeam(teamId: ID!, playerId: ID!): Team
    createTeam(name: String!, league_id: ID!): Team
    createLeague(leagueName: String!, userId:ID!): League 
    joinLeague(leagueId: ID!): League
}
`;

//export typeDefs
module.exports = typeDefs;