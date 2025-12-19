const express = require('express');
const router = express.Router();
const store = require('../data/store');
const { v4: uuidv4 } = require('uuid');

// GET all clients
router.get('/', (req, res) => {
    const data = store.get();
    res.json(data.clients);
});

// POST new client
router.post('/', (req, res) => {
    const { name, designation, description, image } = req.body;
    if (!name || !designation) {
        return res.status(400).json({ message: 'Name and Designation are required' });
    }

    const newClient = {
        id: uuidv4(),
        name,
        designation,
        description: description || '',
        image: image || ''
    };

    const data = store.get();
    data.clients.push(newClient);
    store.set(data);

    res.status(201).json(newClient);
});

// PUT update client
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, designation, description, image } = req.body;

    const data = store.get();
    const index = data.clients.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Client not found' });
    }

    data.clients[index] = { ...data.clients[index], name, designation, description, image };
    store.set(data);

    res.json(data.clients[index]);
});

// DELETE client
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const data = store.get();
    const newClients = data.clients.filter(c => c.id !== id);

    if (newClients.length === data.clients.length) {
        return res.status(404).json({ message: 'Client not found' });
    }

    data.clients = newClients;
    store.set(data);

    res.json({ message: 'Client deleted' });
});

module.exports = router;
