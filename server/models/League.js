const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const leagueSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    active_user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    player_pool: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        }
    ],
    join_code: {
        type: String,
        //generates random code using uuidv4
        default: uuidv4
    },
    teams: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        }
    ] 
});

const League = mongoose.model('League', leagueSchema);

module.exports = League;
