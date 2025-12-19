import { useEffect, useState } from 'react';
import { getProjects } from '../services/api';

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects()
            .then(res => setProjects(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading Projects...</div>;

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Our Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image || 'https://placehold.co/600x400'} alt={project.name} />
                            </div>
                            <div className="project-content">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <button className="btn btn-outline">Read More</button>
                            </div>
                        </div>
                    ))}
                    {projects.length === 0 && <p className="no-data">No projects available yet.</p>}
                </div>
            </div>

            <style jsx>{`
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }
                .project-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s;
                    
                    &:hover {
                        transform: translateY(-5px);
                    }
                }
                .project-image img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .project-content {
                    padding: 1.5rem;
                    h3 { margin-bottom: 0.5rem; color: #1e293b; }
                    p { color: #64748b; margin-bottom: 1.5rem; line-height: 1.6; }
                }
            `}</style>
        </section>
    );
};

export default ProjectsSection;
