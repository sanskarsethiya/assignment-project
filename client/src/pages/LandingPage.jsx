import Navbar from '../components/Navbar';
import ProjectsSection from '../components/ProjectsSection';
import ClientsSection from '../components/ClientsSection';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <header className="hero">
                <div className="container">
                    <h1>Building Dreams, Creating Reality</h1>
                    <p>We deliver excellence in every project.</p>
                    <a href="#projects" className="btn btn-primary">View Our Work</a>
                </div>
            </header>
            <ProjectsSection />
            <ClientsSection />
            <ContactForm />
            <Newsletter />

            <style jsx>{`
                .hero {
                    height: 80vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                    color: white;

                    h1 { font-size: 3.5rem; margin-bottom: 1rem; font-weight: 800; }
                    p { font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9; }
                }
            `}</style>
        </div>
    );
};

export default LandingPage;
