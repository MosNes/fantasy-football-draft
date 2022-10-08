//import auth error handling from Apollo Server
const { AuthenticationError } = require('apollo-server-express');

//import models here
const { User, Player, Team, League } = require('../models');

//import signToken functionality here
const { signToken } = require('../utils/auth');

//import array shuffle function
const shuffleArray = require('../utils/shuffle');

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
                Player.find({ league_id: null })
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

        //get League by ID without Auth
        getLeague: async (parent, { _id }) => {
           
                return (
                    League.findOne({ _id})
                    .populate('player_pool')
                    .populate('users')
                    .populate('active_user')
                    .populate('teams')
                    .populate('teams.players')
                )
            
        },

        //With Auth
        // getLeague: async (parent, { _id }, context) => {
        //     if (context.user) {

        //         return (
        //             League.findOne({_id})
        //             .populate('player_pool')
        //             .populate('users')
        //             .populate('active_user')
        //         )
        //     }
        //     throw new AuthenticationError('Not Logged In');
        // }
    },

    //add methods to handle mutations here
    Mutation: {

        //logs in a user
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email }).populate('teams');

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

            console.log('create team args: ', args);

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

                //adds the team to the League's teams array
                const league = await League.findByIdAndUpdate(
                    { _id: args.league_id },
                    { $push: { teams: team._id }},
                    { new: true }
                );

                console.log("league: ", league);

                return team;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        //creates new league
        createLeague: async (parent, args, context) => {
            if (context.user) {
                //create new league record
                const league = await League.create({
                    ...args,
                    users: [context.user._id]
                });

                //updates User record with league ID
                await User.findByIdAndUpdate(
                    context.user._id,
                    { league_id: league._id },
                    {new: true}
                );

                //get all players where league_id === null
                const players = await Player.find({ league_id: null })
                
                //return without version or id
                .select('-__v -_id');

                //for each player set league_id = newly created league
                for (const player of players) {
                    player.league_id = league._id.toString();
                }

                //bulk create new new player records from new Array
                await Player.insertMany(players);

                //query newly created players
                const newPlayers = await Player.find({ league_id: league._id });

                //generate array of _id's from newly created player records
                const playerIds = await newPlayers.map( player => player._id );

                //push each new player to the league player_pool
                return await League.findByIdAndUpdate(
                    {_id: league._id},
                    { $push: { player_pool: { $each: playerIds } } },
                    { new: true }
                )
                .populate('users')
                .populate('player_pool');
                
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        //adds user to league via join_code
        joinLeague: async (parent, { join_code }, context) => {
            if (context.user) {
                const league = await League.findOneAndUpdate(
                    {join_code: join_code},
                    { $addToSet: { users: context.user._id } },
                    { new: true }
                ).populate('users').populate('player_pool');

                //updates User record with league ID
                await User.findByIdAndUpdate(
                    context.user._id,
                    { league_id: league._id },
                    {new: true}
                );

                return league;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        //adds player to team and marks player as drafted
        addPlayerToTeam: async (parent, { playerId, teamId }, context) => {
            if (context.user) {

                //marks the player as drafted: true
                await Player.findByIdAndUpdate(
                    playerId,
                    { drafted: true },
                    { new: true}
                );
                
                //adds that player to the team's players array
                const team = await Team.findByIdAndUpdate(
                    teamId,
                    { $addToSet: { players: playerId } },
                    { new: true }
                ).populate('players');

                return team;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        //starts a draft
        startDraft: async (parent, { league_id }, context) => {
            if (context.user) {

                const league = await League.findById( league_id ).populate('users');

                //gets array of user IDs from the league's users
                const userIds = await league.users.map( user => user._id );
                
                //shuffles the array of users to randomize them before a draft round
                shuffleArray(userIds);

                //selects the user at index 0 as the active user
                //overwrites current array of users with shuffled array
                const updatedLeague = await League.findByIdAndUpdate(
                    league_id,
                    {
                        active_user: userIds[0],
                        users: userIds
                    },
                    { new: true }
                    ).populate('users').populate('active_user').populate('player_pool');

                return updatedLeague;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        
        //sets the next active user during a draft round
        setActiveUser: async (parent, { league_id }, context) => {
            if (context.user) {
                const league = await League.findById(league_id)        
                    .populate('users');
                
                //gets array of user IDs
                const userIds = await league.users.map( user => user._id );

                console.log('before push shift array: ', userIds);

                //moves the user at index 0 to the end of the array
                userIds.push(userIds.shift());

                console.log('after push shift arrays: ', userIds);

                //selects the new user at index 0 as the active user
                const activeUser = userIds[0];

                //updates League with new array and active user
                const updatedLeague = await League.findByIdAndUpdate(
                    league_id,
                    {
                        active_user: activeUser,
                        users: userIds
                    },
                    { new: true}
                ).populate('users').populate('active_user').populate('player_pool');

                return updatedLeague;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        
        //ends the current draft
        endDraft: async (parent, { league_id }, context) => {
            if(context.user) {

                //sets the active user to null
                const league = await League.findByIdAndUpdate(
                    league_id,
                    { active_user: null },
                    { new: true}
                ).populate('users').populate('active_user').populate('player_pool');

                return league;

            }
            throw new AuthenticationError('You need to be logged in!');
        },

        //deletes a league, its teams, and its copy of players
        deleteLeague: async (parent, { league_id }, context) => {
            if (context.user) {
                //deletes all teams with league_id = league_id
                const deletedTeams = await Team.deleteMany({ league_id: league_id });
                console.log("Deleted Teams: ", deletedTeams);

                //deletes all players with league_id = league_id
                const deletedPlayers = await Player.deleteMany({ league_id: league_id });
                console.log("Deleted Players: ", deletedPlayers);

                //deletes the league
                const deletedLeague = await League.findByIdAndDelete(league_id);
                console.log("Deleted League: ", deletedLeague);
                

                return deletedLeague;

            }
            throw new AuthenticationError('You need to be logged in!');
        }
        
    }
};

module.exports = resolvers;