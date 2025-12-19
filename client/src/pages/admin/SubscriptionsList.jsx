import { useState, useEffect } from 'react';
import { getSubscriptions } from '../../services/api';

const SubscriptionsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getSubscriptions().then(res => setItems(res.data));
    }, []);

    return (
        <div className="manager-view">
            <h2>Newsletter Subscriptions</h2>
            <div className="list-container">
                {items.map(item => (
                    <div key={item.id} className="list-item">
                        <span className="email">{item.email}</span>
                        <span className="date">{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .list-container {
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }
                .list-item {
                    padding: 1rem;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    justify-content: space-between;
                    
                    &:last-child { border-bottom: none; }
                    .email { font-weight: 500; }
                    .date { color: #64748b; font-size: 0.9rem; }
                }
            `}</style>
        </div>
    );
};

export default SubscriptionsList;
