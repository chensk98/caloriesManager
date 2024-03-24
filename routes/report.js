const express = require('express');
const calories = require('../models/calories');
const router = express.Router();

router.get('/report', async (req, res) => {
    try {
        // Extract parameters from the request query
        const { user_id, month, year } = req.query;

        // Retrieve all items with the specified user_id, month, and year
        const all_items = await calories.find({ user_id, month, year });
        // Initialize the report object with empty arrays for each category
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: []
        }


        // Iterate over each item and categorize it based on its category
        for (const item of all_items) {
            switch (item.category) {
                case 'breakfast':
                    report.breakfast.push(item);
                    break;
                case 'lunch':
                    report.lunch.push(item);
                    break;
                case 'dinner':
                    report.dinner.push(item);
                    break;
                default:
                    report.other.push(item);
            }
        }


        // Send the categorized report back to the client
        res.status(200).json(report);
    } catch (error) {
        console.error('Error retrieving report:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;










module.exports = router;