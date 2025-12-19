const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

const defaultData = {
    projects: [],
    clients: [],
    contacts: [],
    subscriptions: []
};

let memoryStore = { ...defaultData };

const init = () => {
    // Ensure data directory exists
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    if (fs.existsSync(DATA_FILE)) {
        try {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            memoryStore = JSON.parse(data);
            console.log('Data loaded from disk');
        } catch (err) {
            console.error('Error reading data file, utilizing defaults:', err);
        }
    } else {
        save(); // Save defaults
        console.log('Initialized new data store');
    }
};

const save = () => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(memoryStore, null, 2));
    } catch (err) {
        console.error('Error saving data:', err);
    }
};

module.exports = {
    init,
    save,
    get: () => memoryStore,
    set: (data) => {
        memoryStore = data;
        save();
    }
};
