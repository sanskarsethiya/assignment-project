import { useEffect, useState } from 'react';
import { getClients } from '../services/api';

const ClientsSection = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClients()
            .then(res => setClients(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <section className="section clients-section" id="clients">
            <div className="container">
                <h2 className="section-title">Happy Clients</h2>
                <div className="clients-list">
                    {clients.map(client => (
                        <div key={client.id} className="client-card">
                            <img src={client.image || 'https://placehold.co/100x100'} alt={client.name} className="client-avatar" />
                            <div className="client-info">
                                <h3>{client.name}</h3>
                                <h4>{client.designation}</h4>
                                <p>"{client.description}"</p>
                            </div>
                        </div>
                    ))}
                    {clients.length === 0 && <p className="no-data">No clients added yet.</p>}
                </div>
            </div>

            <style jsx>{`
                .clients-section {
                    background-color: #f1f5f9;
                    padding: 4rem 0;
                }
                .clients-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }
                .client-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 12px;
                    text-align: center;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                }
                .client-avatar {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-bottom: 1rem;
                    border: 3px solid #f8fafc;
                    box-shadow: 0 0 0 2px #2563eb;
                }
                .client-info {
                    h3 { font-size: 1.1rem; margin-bottom: 0.2rem; }
                    h4 { color: #2563eb; font-size: 0.9rem; margin-bottom: 1rem; }
                    p { font-style: italic; color: #64748b; }
                }
            `}</style>
        </section>
    );
};

export default ClientsSection;
