const db = require('../config/connection');
const { Player } = require('../models');

//import json file and parse it into an array of objects
const playerlist = JSON.parse(require('./playerSeeds.json'));

//opens db connection
db.once('open', async () => {
    //deletes all current Player records
    await Player.deleteMany({});

    //create new player records
    try {
        await Player.insertMany(playerlist);
        console.log('Players Loaded!');
        //close db connection
        process.exit(0);
        
    //catch error
    } catch(e) {
        console.log("Something went horribly wrong.");
        console.log(e);
        process.exit();
    }
});