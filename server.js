const { v4: uuidv4 } = require('uuid'); 
const express = require ('express');
const { application } = require('express');
const PORT = process.env.PORT || 3001; 

//initilze the server
const app = express(); 
//access to front end.
app.use(express.static('public')); 
//parse incoming JSON data
app.use(express.json()); 




application.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
