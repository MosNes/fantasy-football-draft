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
    firstName: String
    lastName: String
    team_Id: [Team]
    position: String
}
type Team {
    _id: ID
    name: String
    league_Id: [League]
}
type League {
    _id: ID
    name: String
}
type Auth {
    token: ID!
    user: User
}
type Query {
    
}
type Mutation {
    login(email: String!, password: String!): Auth
}
`;

//export typeDefs
module.exports = typeDefs;