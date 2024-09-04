const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            connectTimeoutMS: 30000,  // Increase the connection timeout
            socketTimeoutMS: 45000,   // Increase the socket timeout
        });
        console.log('Connected to MongoDB Atlas via Mongoose');
    } catch (error) {
        console.error('Failed to connect to MongoDB Atlas via Mongoose', error);
        process.exit(1);  // Exit the process if the connection fails
    }
}

module.exports = connectToDatabase;
