import React from 'react';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        {/* Social + contact links */}
        <div className="contact-info-strip">
          <a href="mailto:kabhiraami5869@gmail.com" className="contact-info-item">
            <Mail size={18} />
            <span>kabhiraami5869@gmail.com</span>
          </a>
          <a href="tel:+916361767806" className="contact-info-item">
            <Phone size={18} />
            <span>+91 6361767806</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abhiraami-k-4007a3296/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-item"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ak5869"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-item"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>

        <div className="contact-container glass-card">
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            I'm actively looking for opportunities as an ML Engineer or AI Engineer.
            If you have a role that fits my profile or just want to chat about AI and tech, feel free to reach out!
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-input" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-input" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-textarea" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
