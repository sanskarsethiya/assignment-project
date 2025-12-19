import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">Piver parivar</Link>
                <div className="nav-links">
                    <a href="#projects">Projects</a>
                    <a href="#clients">Clients</a>
                    <a href="#contact">Contact</a>
                    <Link to="/admin" className="btn btn-primary btn-sm">Admin</Link>
                </div>
            </div>

            <style jsx>{`
                .navbar {
                    position: sticky;
                    top: 0;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    z-index: 1000;
                    padding: 1rem 0;
                }
                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #1e293b;
                    letter-spacing: -1px;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;

                    a {
                        font-weight: 500;
                        color: #64748b;
                        &:hover { color: #2563eb; }
                    }
                    
                    .btn-sm {
                        padding: 0.5rem 1rem;
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
