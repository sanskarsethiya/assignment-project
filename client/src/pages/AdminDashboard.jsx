import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ProjectsManager from './admin/ProjectsManager';
import ClientsManager from './admin/ClientsManager';
import ContactSubmissions from './admin/ContactSubmissions';
import SubscriptionsList from './admin/SubscriptionsList';

const AdminDashboard = () => {
    const location = useLocation();

    return (
        <div className="admin-layout">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h3>Admin Panel</h3>
                    <Link to="/" className="back-link">← Back to Site</Link>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/admin/projects" className={location.pathname.includes('projects') ? 'active' : ''}>Projects</Link>
                    <Link to="/admin/clients" className={location.pathname.includes('clients') ? 'active' : ''}>Clients</Link>
                    <Link to="/admin/contacts" className={location.pathname.includes('contacts') ? 'active' : ''}>Contact Messages</Link>
                    <Link to="/admin/subscriptions" className={location.pathname.includes('subscriptions') ? 'active' : ''}>Subscriptions</Link>
                </nav>
            </aside>
            <main className="admin-content">
                <Routes>
                    <Route path="projects" element={<ProjectsManager />} />
                    <Route path="clients" element={<ClientsManager />} />
                    <Route path="contacts" element={<ContactSubmissions />} />
                    <Route path="subscriptions" element={<SubscriptionsList />} />
                    <Route path="*" element={<div className="welcome">Select an option from the sidebar</div>} />
                </Routes>
            </main>

            <style jsx>{`
                .admin-layout {
                    display: flex;
                    min-height: 100vh;
                    background: #f1f5f9;
                }
                .sidebar {
                    width: 250px;
                    background: #1e293b;
                    color: white;
                    padding: 2rem 0;
                    flex-shrink: 0;
                }
                .sidebar-header {
                    padding: 0 1.5rem 2rem;
                    h3 { margin-bottom: 0.5rem; }
                    .back-link { font-size: 0.9rem; color: #94a3b8; &:hover { color: white; } }
                }
                .sidebar-nav {
                    display: flex;
                    flex-direction: column;
                    a {
                        padding: 1rem 1.5rem;
                        color: #cbd5e1;
                        transition: background 0.2s;
                        &:hover { background: rgba(255,255,255,0.05); color: white; }
                        &.active { background: #2563eb; color: white; }
                    }
                }
                .admin-content {
                    flex: 1;
                    padding: 2rem;
                    overflow-y: auto;
                }
                .welcome {
                    font-size: 1.2rem;
                    color: #64748b;
                    text-align: center;
                    margin-top: 4rem;
                }
            `}</style>
        </div>
    );
};

export default AdminDashboard;
