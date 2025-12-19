import { useState } from 'react';
import { submitContact } from '../services/api';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        city: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await submitContact(formData);
            setStatus('success');
            setFormData({ fullName: '', email: '', mobile: '', city: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <div className="contact-wrapper">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
                        {status === 'error' && <p className="error-msg">Failed to send message.</p>}
                    </form>
                </div>
            </div>

            <style jsx>{`
                .contact-wrapper {
                    max-width: 600px;
                    margin: 0 auto;
                }
                .contact-form {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 12px;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
                .form-group {
                    margin-bottom: 1.5rem;
                    label { display: block; margin-bottom: 0.5rem; font-weight: 500; }
                    input {
                        width: 100%;
                        padding: 0.75rem;
                        border: 1px solid #cbd5e1;
                        border-radius: 6px;
                        transition: border-color 0.2s;
                        &:focus { outline: none; border-color: #2563eb; }
                    }
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                .success-msg { color: #10b981; margin-top: 1rem; text-align: center; }
                .error-msg { color: #ef4444; margin-top: 1rem; text-align: center; }
            `}</style>
        </section>
    );
};

export default ContactForm;
