import { useState, useEffect } from 'react';
import { getContacts } from '../../services/api';

const ContactSubmissions = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getContacts().then(res => setItems(res.data));
    }, []);

    return (
        <div className="manager-view">
            <h2>Contact Submissions</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{new Date(item.date).toLocaleDateString()}</td>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <style jsx>{`
                .table-container {
                    overflow-x: auto;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid #eee;
                }
                th { background: #f8fafc; font-weight: 600; }
            `}</style>
        </div>
    );
};

export default ContactSubmissions;
