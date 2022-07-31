const path = require('path');
const router = require('express').Router(); 
//add route to serve HTML
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html')); 
}); 

//add route to serve index HTML
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html')); 
}); 

module.exports = router; 