const express = require('express');
const router = express.Router();
const store = require('../data/store');
const { v4: uuidv4 } = require('uuid');

// GET all subscriptions
router.get('/', (req, res) => {
    const data = store.get();
    res.json(data.subscriptions);
});

// POST subscribe
router.post('/', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    const data = store.get();

    // Check for duplicate
    if (data.subscriptions.some(s => s.email === email)) {
        return res.status(400).json({ message: 'Email already subscribed' });
    }

    const newSub = {
        id: uuidv4(),
        email,
        date: new Date().toISOString()
    };

    data.subscriptions.push(newSub);
    store.set(data);

    res.status(201).json({ message: 'Subscribed successfully' });
});

module.exports = router;
