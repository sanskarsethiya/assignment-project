const express = require('express');
const cors = require('cors');
const path = require('path');
const store = require('./data/store');

const projectsRoutes = require('./routes/projects');
const clientsRoutes = require('./routes/clients');
const contactRoutes = require('./routes/contact');
const subscribeRoutes = require('./routes/subscribe');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load initial data
store.init();

// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/subscribe', subscribeRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
