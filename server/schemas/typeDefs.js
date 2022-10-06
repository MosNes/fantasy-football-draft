const { gql } = require('apollo-server-express');
const typeDefs = gql`
type User {
    _id: ID
    league_id: League
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
    league_id: String
    drafted: Boolean
}
type Team {
    _id: ID
    name: String
    owner: String
    league_id: League
    players: [Player]
    playerCount: Int
}
type League {
    _id: ID
    name: String
    users: [User]
    active_user: User
    player_pool: [Player]
    join_code: String
    teams: [Team]
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
    getUsers: [User]
    getUser(email: String!): User
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
    createLeague(name: String!): League 
    joinLeague(join_code: String!): League
    startDraft(league_id: ID!): League
    setActiveUser(league_id: ID!): League
    endDraft(league_id: ID!): League
    deleteLeague(league_id: ID!): League
}
type Mutation {
    login(email: String!, password: String!): Auth
}
`;
module.exports = typeDefs;