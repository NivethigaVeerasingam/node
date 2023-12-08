// Importing the Express.js framework
const express = require('express');

// Creating an Express router
const router = express.Router()

// Exporting the router 
module.exports = router;


// //Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

// //Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

// //Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send('Get by ID API')
// })

// //Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

// //Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })
//Post Method
router.post('/post', (req, res) => {
     // Creating a new instance of the 'Model' with data 
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try{

    }
    // The 'catch' block is for handling errors
    catch(error){
        
    }
})

//export the module from ./model/model'

const Model = require('../model/model');