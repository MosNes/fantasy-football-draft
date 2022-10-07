const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    league_id: {
        type: Schema.Types.ObjectId,
        ref: 'League',
        required: true
    },
    players: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        }
    ],
    //username of team owner
    owner: {
        type: String,
        required: true,
        trim: true
    }
},
//needed for virtuals
{
    toJSON: {
        virtuals: true
    }
});

//calculate current # of players
teamSchema.virtual('playerCount').get(function() {
    return this.players.length;
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
