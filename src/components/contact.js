import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">
          Interested in working together or have a question? Feel free to get in touch.
        </p>

        <div className="contact-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem', alignItems: 'start' }}>
          
          {/* Left Side: Contact Form & Info */}
          <div className="contact-form-side" style={{ textAlign: 'left' }}>
            {submitted ? (
              <div className="success-message" style={{ padding: '2rem', background: '#1e1e1e', borderRadius: '12px', border: '1px solid #444' }}>
                <h3 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>Thank you!</h3>
                <p style={{ color: '#d1d5db' }}>Your message has been sent successfully. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="name" style={{ fontSize: '0.9rem', marginBottom: '0.3rem', color: '#d1d5db' }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#1e1e1e', color: '#fff' }}
                  />
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="email" style={{ fontSize: '0.9rem', marginBottom: '0.3rem', color: '#d1d5db' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#1e1e1e', color: '#fff' }}
                  />
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="message" style={{ fontSize: '0.9rem', marginBottom: '0.3rem', color: '#d1d5db' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#1e1e1e', color: '#fff', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s' }}>
                  Send Message
                </button>
              </form>
            )}

            <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1.5rem' }}>
              <a href="mailto:kidenijimia@email.com" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '500' }}>
                ✉ kidenijimia@email.com
              </a>
              <a href="tel:+256770380815" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '500' }}>
                📞 +256 770 380 815
              </a>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', margin: 0 }}>
                Based in Kampala, Uganda. Available for remote and on-site opportunities.
              </p>
            </div>
          </div>

          {/* Right Side: Google Maps Embed */}
          <div className="contact-map-side" style={{ width: '100%', height: '100%', minHeight: '350px' }}>
            <iframe
              title="Kampala Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127670.35408229986!2d32.51493035300067!3d0.31361100000000787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9dceb2b7%3A0x8ec8c8d23b3fbf7e!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px', minHeight: '350px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;