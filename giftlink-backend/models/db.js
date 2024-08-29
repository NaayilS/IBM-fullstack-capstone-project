// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        // If the database connection is already established, return the existing instance
        return dbInstance;
    }

    try {
        // Task 1: Connect to MongoDB
        const client = new MongoClient(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Use await client.connect() to connect to MongoDB
        await client.connect();
        console.log("Connected successfully to MongoDB server");

        // Task 2: Assign dbInstance
        // Assign dbInstance with client.db('giftDB')
        dbInstance = client.db(dbName);

        // Task 3: Return dbInstance
        return dbInstance;
    } catch (err) {
        console.error('Failed to connect to the database', err);
        throw err;
    }
}

module.exports = { connectToDatabase };