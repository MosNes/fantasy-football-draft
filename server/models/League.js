const mongoose = require('mongoose');
import { v4 as uuidv4 } from 'uuid';

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
            ref: 'DraftPlayer'
        }
    ],
    join_code: {
        type: String,
        //generates random code using uuidv4
        default: uuidv4
    }
});

const League = mongoose.model('League', leagueSchema);

module.exports = League;
