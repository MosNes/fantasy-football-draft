const mongoose = require('mongoose');

const { Schema } = mongoose;

const playerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  team_id: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  position: {
    type: String,
    enum: ['C', 'RB', 'FB', 'HB', 'OG', 'OT', 'LG', 'LT', 'RG', 'RT', 'TE', 'QB', 'WR', 'CB', 'DE', 'DT', 'LB', 'ILB', 'MLB', 'NT', 'OLB', 'S', 'FS', 'SS', 'K', 'KR', 'LS', 'P', 'PR'] 
  }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
