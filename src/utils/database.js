const mongoose = require("mongoose");
const { PostModel } = require("..models/PostModel");

// Function to connect to whatever DB our environment variable says to connect to 
async function dbConnect(){
	let databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/${process.env.npm_oackage_name}`;

    await mongoose.connect(databaseUrl);
}

module.exports = {
    dbConnect
}