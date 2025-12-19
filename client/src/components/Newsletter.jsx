import { useState } from 'react';
import { subscribeNewsletter } from '../services/api';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        try {
            await subscribeNewsletter(email);
            setMessage('Subscribed successfully!');
            setEmail('');
        } catch (err) {
            setMessage(err.response?.data?.message || 'Subscription failed.');
        }
    };

    return (
        <section className="section newsletter-section">
            <div className="container">
                <div className="newsletter-content">
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Stay updated with our latest news and offers.</p>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>

            <style jsx>{`
                .newsletter-section {
                    background: #1e293b;
                    color: white;
                    padding: 4rem 0;
                    text-align: center;
                }
                .newsletter-content {
                    max-width: 500px;
                    margin: 0 auto;
                    h2 { margin-bottom: 1rem; }
                    p { opacity: 0.8; margin-bottom: 2rem; }
                }
                .newsletter-form {
                    display: flex;
                    gap: 0.5rem;
                    input {
                        flex: 1;
                        padding: 0.75rem;
                        border-radius: 6px;
                        border: none;
                    }
                }
                .message { margin-top: 1rem; font-size: 0.9rem; opacity: 0.9; }
            `}</style>
        </section>
    );
};

export default Newsletter;
