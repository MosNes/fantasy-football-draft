//import auth error handling from Apollo Server
const { AuthenticationError } = require('apollo-server-express');

//import models here
const { User } = require('../models');

//import signToken functionality here
const { signToken } = require('../utils/auth');

const resolvers = {
    //add methods to handle queries here
    Query: {

    },

    //add methods to handle mutations here
    Mutation: {

    }
};

module.exports = resolvers;