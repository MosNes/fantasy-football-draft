
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fantasy-football-draft', {});

module.exports = mongoose.connection;