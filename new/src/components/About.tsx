import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '900px' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>Who am I?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.85' }}>
              I'm a Computer Science student at SRMIST with a stellar CGPA of 9.71, also pursuing
              a BS in Data Science from IIT Madras (online). I'm passionate about building
              intelligent, scalable systems — from AI agents and RAG pipelines to data engineering workflows.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.85' }}>
              I've interned as a Data Scientist at DesiCrew Solutions (IITM Research Park)
              and was selected among the <strong style={{ color: 'var(--text-primary)' }}>top 50 out of 5000+ applicants</strong> for
              the prestigious Citi Bridge Program. I thrive in cross-functional, production-grade environments.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div className="glass-card about-fact" style={{ width: '320px' }}>
              <MapPin size={20} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
              <div>
                <p className="fact-label">Location</p>
                <p className="fact-value">Chennai, India</p>
              </div>
            </div>
            <div className="glass-card about-fact" style={{ width: '320px' }}>
              <Briefcase size={20} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
              <div>
                <p className="fact-label">Target Roles</p>
                <p className="fact-value">ML / AI Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
