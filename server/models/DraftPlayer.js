const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const draftPlayerSchema = new Schema ({
    player: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    drafted: {
        type: Boolean,
        default: false
    },

});

const DraftPlayer = model('DraftPlayer', draftPlayerSchema);

module.exports = DraftPlayer;