//export mogoose
const mongoose = require('mongoose');

// Define a Mongoose schema for the data model
const dataSchema = new mongoose.Schema({
    name: {                 // Define the 'name' field in the schema
        required: true,     //name is a required field
        type: String        //name type String
    },
    age: {                  // Define the 'name' field in the schema
        required: true,     //age is a required field
        type: Number        //age type String
    }
})
// Create a Mongoose model based on the schema and export it
module.exports = mongoose.model('Data', dataSchema)