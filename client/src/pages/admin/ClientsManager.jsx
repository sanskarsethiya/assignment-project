import { useState, useEffect } from 'react';
import { getClients, createClient, deleteClient } from '../../services/api';

const ClientsManager = () => {
    const [clients, setClients] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', designation: '', description: '', image: '' });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        getClients().then(res => setClients(res.data));
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        await createClient(newItem);
        setNewItem({ name: '', designation: '', description: '', image: '' });
        loadData();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this client?')) {
            await deleteClient(id);
            loadData();
        }
    };

    return (
        <div className="manager-view">
            <h2>Manage Clients</h2>

            <form onSubmit={handleAdd} className="add-form">
                <input type="text" placeholder="Client Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} required />
                <input type="text" placeholder="Designation" value={newItem.designation} onChange={e => setNewItem({ ...newItem, designation: e.target.value })} required />
                <input type="text" placeholder="Image URL" value={newItem.image} onChange={e => setNewItem({ ...newItem, image: e.target.value })} />
                <textarea placeholder="Testimonial" value={newItem.description} onChange={e => setNewItem({ ...newItem, description: e.target.value })} />
                <button type="submit" className="btn btn-primary">Add Client</button>
            </form>

            <div className="items-list">
                {clients.map(item => (
                    <div key={item.id} className="admin-item">
                        <div>
                            <strong>{item.name}</strong> - {item.designation}
                        </div>
                        <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .add-form {
                    display: grid;
                    gap: 1rem;
                    max-width: 500px;
                    margin-bottom: 2rem;
                    input, textarea { padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; }
                }
                .items-list {
                    background: white;
                    border: 1px solid #eee;
                    border-radius: 8px;
                }
                .admin-item {
                    padding: 1rem;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                    &:last-child { border-bottom: none; }
                }
                .btn-delete {
                    background: #ef4444;
                    color: white;
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
};

export default ClientsManager;
