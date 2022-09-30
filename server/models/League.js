const mongoose = require('mongoose');

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
    ]
});

const League = mongoose.model('League', leagueSchema);

module.exports = League;
