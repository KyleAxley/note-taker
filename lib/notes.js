const fs = require("fs"); 
const path = require("path"); 

//create a new note 
function createNewNote (body, notesArray) {
    notesArray.push(body); 

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        jSON.stringify({ notes: notesArray }, null, 2)
    );
    return body; 
}

//todo delete note by id

module.exports = {createNewNote}; 