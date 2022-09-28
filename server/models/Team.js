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
    }
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
