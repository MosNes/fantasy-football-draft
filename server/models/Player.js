const mongoose = require('mongoose');

const { Schema } = mongoose;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  team: {
    type: String,
    trim: true
  },
  position: {
    type: String,
    enum: ['C', 'RB', 'FB', 'HB', 'OG', 'OT', 'LG', 'LT', 'RG', 'RT', 'TE', 'QB', 'WR', 'CB', 'DE', 'DT', 'LB', 'ILB', 'MLB', 'NT', 'OLB', 'S', 'FS', 'SS', 'K', 'KR', 'LS', 'P', 'PR'],
    required: true
  },
  projected_points: {
    type: Number,
  },
  number: {
    type: Number,
    required: true
  },

});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
