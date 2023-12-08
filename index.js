
// Its for .env file run coding
require('dotenv').config();

// Import the 'express' module to create a web server
const express = require('express');

// Import the 'mongoose' module
const mongoose = require('mongoose');

// Get the value of the environment variable 'DATABASE_URL'.
const mongoString = process.env.DATABASE_URL;

// Connecting to the MongoDB database 
mongoose.connect(mongoString);
const database = mongoose.connection;

// Attach an error event listener for database
database.on('error', (error) => {
    console.log(error)
})

// log a message indicating that the database is connected.
database.once('connected', () => {
    console.log('Database Connected');
})

// Import the express library
const app = express();

// its is the middleware
app.use(express.json());

// Starting the Express server and making it listen on port 3000
// Callback function executed once the server is successfully started
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
// Importing the routes module
const routes = require('./routes/routes');

// Using the routes module for paths starting with api

app.use('/api', routes)

