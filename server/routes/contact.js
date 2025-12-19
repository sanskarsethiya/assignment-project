const express = require('express');
const router = express.Router();
const store = require('../data/store');
const { v4: uuidv4 } = require('uuid');

// GET all contacts
router.get('/', (req, res) => {
    const data = store.get();
    res.json(data.contacts);
});

// POST contact form
router.post('/', (req, res) => {
    const { fullName, email, mobile, city } = req.body;

    if (!fullName || !email) {
        return res.status(400).json({ message: 'Name and Email are required' });
    }

    const newContact = {
        id: uuidv4(),
        fullName,
        email,
        mobile,
        city,
        date: new Date().toISOString()
    };

    const data = store.get();
    data.contacts.push(newContact);
    store.set(data);

    res.status(201).json({ message: 'Message sent successfully' });
});

module.exports = router;
