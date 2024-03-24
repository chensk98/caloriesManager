const express = require('express');
const calories = require('../models/calories');
const router = express.Router();



router.post('/addcalories', async (req, res) => {
    // Extract data from request body
    const { user_id, year, month, day,description ,category ,amount} = req.body;

    // Create a new calorie consumption item
    const newCalorie = new calories({ user_id, year, month,day ,description ,category ,amount});

    const availableCategories = ['breakfast','lunch','dinner','other'];
    if (!availableCategories.includes(category)) {
        return res.status(400).json({error: 'Invalid category'});
    }

    // Save the new item to the database
    await newCalorie.save()
        .then(() => {
            res.status(201).json({ message: 'Calorie consumption item added successfully' });
        })
        .catch((error) => {
            console.error('Error adding calorie consumption item:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});


module.exports = router;