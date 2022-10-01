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
                    //do not return version or password
                    .select('-__v -password')
                    .populate('teams')
            );
        },

        //get user by email
        getUser: async (parent, { email }) => {
            return User.findOne({ email })
                .select('-__v -password')
                .populate('teams')
        },

        //authenticate user
        me: async (parent, args, context) => {
            //if request contains valid user object inside the context
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('teams')
                return userData;
            }

            //else throw an auth error
            throw new AuthenticationError('Not Logged In');
        },

        //get all Players
        getPlayers: async () => {
            return (
                Player.find()
            )
        },

        //get Team by ID
        getTeam: async (parent, { _id }) => {
            return(
                Team.findOne({_id})
                .populate('players')
                .populate('league_id')
            );
        },

        //get all Leagues
        getLeagues: async () => {
            return (
                League.find()
            )
        },

        //get League by ID
        getLeague: async (parent, { _id }) => {
            return (
                League.findOne({_id})
                .populate('player_pool')
                .populate('users')
                .populate('user')
            )
        }
    },

    //add methods to handle mutations here
    Mutation: {

        //logs in a user
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            //if user is not found
            if (!user) {
				throw new AuthenticationError('Email or Password incorrect!');
			}

            //match provided password to password from database
			const correctPw = await user.isCorrectPassword(password);

            //if password is not correct
			if (!correctPw) {
				throw new AuthenticationError('Email or Password incorrect!');
			}

            //sign and return token
			const token = signToken(user);
			return { token, user };
        },

        //adds a new user to db
        addUser: async (parent, args) => {
            const user = await User.create(args);

            //sign and return token
			const token = signToken(user);
			return { token, user };
        },

        //creates new team
        createTeam: async (parent, args, context) => {
            if (context.user) {
                //creates new team record
                const team = await Team.create({
                    ...args,
                    owner: context.user.username
                });

                //adds the team to the User's teams array
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { teams: team._id } },
                    { new: true }
                );

                return team;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

    }
};

module.exports = resolvers;