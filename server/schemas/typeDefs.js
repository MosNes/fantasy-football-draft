//import the graphQL tagged template function
const { gql } = require('apollo-server-express');

//---------------CREATE TYPEDEFS-----------------------------------

//should first name/last name in model and here just be a username? or do we want first name/last name?
const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    order: [Order]
}
type Player {
    _id: ID
    playerName: String 
    team_Id: [Team]
    position: String
}
type Team {
    _id: ID
    teamName: String
    league_Id: [League]
}
type League {
    _id: ID
    leagueName: String
    activeUser:[User]
}
type Auth {
    token: ID!
    user: User
}
type Query {
getUsers: [User]
getUser(username: String!): User
getPlayers: [Player]
getTeam(_id: ID!): Team
getLeagues: [League]
getLeague:(_id:ID!): League
}

type Mutation {
login(email: String!, password: String!): Auth
addUser(username: String!, email: String!, password: String!): Auth
addPlayerToTeam(teamId: ID!, playerId: ID!): Team
createTeam(userId: ID!, leagueId: ID!): Team
createLeague(leagueName: String!, userId:ID!): League 
joinLeague(leagueId: ID!): League
}

`;

//export typeDefs
module.exports = typeDefs;