const mongoose = require('mongoose');

const { Schema } = mongoose;

const leagueSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})

const League = mongoose.model('League', leagueSchema);

module.exports = League;
