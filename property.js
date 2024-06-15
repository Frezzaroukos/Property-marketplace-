const express = require('express');
const Property = require('../models/Property');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/add', authMiddleware, async (req, res) => {
    try {
        const { description, price, image } = req.body;
        const property = new Property({ description, price, image, owner: req.user.id });
        await property.save();
        res.status(201).send('Property added');
    } catch (err) {
        res.status(400).send('Error adding property');
    }
});

module.exports = router;
