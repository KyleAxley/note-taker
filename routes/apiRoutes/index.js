const router = require('express').Router(); 
const { notes } = require("../../db/db.json");
const { v4: uuidv4 } = require('uuid'); 
const { createNewNote } = require('../../lib/notes');

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
        req.body.id = uuidv4(); 
        //todo create new note 
        const note = createNewNote(req.body, notesList); 
        res.json(note); 
    } else {
        res.status(404).send("something went wrong, these are not the drones you are looking for."); 
    } 
})

module.exports = router; 