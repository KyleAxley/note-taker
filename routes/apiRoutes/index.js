const router = require('express').Router(); 
const { notes } = require("../../db/db.json");

//route to retrieve all notes
router.get('/notes', (req, res) => {
    let results = notes
    res.json(results); 
}); 

//route to add new note to db.json 
router.post('/notes', (req, res) => {
    let notesList = notes 
    //validate req.body
    if(req.body.title && req.body.text) {
        //todo set unique id 
        //todo create new note 
    } else {

    } 
})

module.exports = router; 