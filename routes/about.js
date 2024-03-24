const express = require('express');
const app = express();
const router = express.Router();

// data for developers
const developers = [
    { firstname: 'Chen', lastname: 'Skanderany', id: 206508541, email: 'chensk22@gmail.com' },
    { firstname: 'Mili', lastname: 'Segal', id: 208297333, email: 'Milisegal123@gmail.com' }
];

// Endpoint to handle GET requests to /about
router.get('/about', (req, res) => {
    res.json(developers); // Send the array of developer objects as JSON response
});


module.exports = router;