const express = require('express');
const Property = require('../models/Property');

const router = express.Router();

router.get('/search', async (req, res) => {
    const query = req.query.query;
    try {
        const properties = await Property.find({
            description: new RegExp(query, 'i')
        });
        res.json(properties);
    } catch (err) {
        res.status(400).send('Error searching properties');
    }
});

module.exports = router;
