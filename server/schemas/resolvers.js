//import auth error handling from Apollo Server
const { AuthenticationError } = require('apollo-server-express');

//import models here
const { User, Player, DraftPlayer, Team, League } = require('../models');

//import signToken functionality here
const { signToken } = require('../utils/auth');

const resolvers = {
    //add methods to handle queries here
    Query: {
        //get all users
        getUsers: async () => {
            return (
                User.find()
                    //do not return versin or password
                    .select('-__v -password')
                    .populate('teams')
            );
        },
        //get user by email
        getUser: async (parent, { email }) => {
            
        }

    },

    //add methods to handle mutations here
    Mutation: {

    }
};

module.exports = resolvers;