const express = require('express');
const router = express.Router();
const store = require('../data/store');
const { v4: uuidv4 } = require('uuid');

// GET all projects
router.get('/', (req, res) => {
    const data = store.get();
    res.json(data.projects);
});

// POST new project
router.post('/', (req, res) => {
    const { name, description, image } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and Description are required' });
    }

    const newProject = {
        id: uuidv4(),
        name,
        description,
        image: image || ''
    };

    const data = store.get();
    data.projects.push(newProject);
    store.set(data);

    res.status(201).json(newProject);
});

// PUT update project
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, image } = req.body;

    const data = store.get();
    const index = data.projects.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Project not found' });
    }

    data.projects[index] = { ...data.projects[index], name, description, image };
    store.set(data);

    res.json(data.projects[index]);
});

// DELETE project
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const data = store.get();
    const newProjects = data.projects.filter(p => p.id !== id);

    if (newProjects.length === data.projects.length) {
        return res.status(404).json({ message: 'Project not found' });
    }

    data.projects = newProjects;
    store.set(data);

    res.json({ message: 'Project deleted' });
});

module.exports = router;
