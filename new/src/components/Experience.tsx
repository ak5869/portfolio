import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          <div className="glass-card experience-card">
            <div className="exp-header">
              <div>
                <p className="exp-role">Data Science Intern</p>
                <p className="exp-company">DesiCrew Solutions, IITM Research Park · Chennai</p>
              </div>

            </div>
            <ul className="exp-bullets">
              <li>Developed and optimized data processing workflows for real-world datasets.</li>
              <li>Implemented debugging &amp; logging strategies to resolve system bottlenecks.</li>
              <li>Delivered scalable AI-driven solutions in cross-functional teams under production constraints.</li>
            </ul>
          </div>

          <div className="glass-card experience-card">
            <div className="exp-header">
              <div>
                <p className="exp-role">Citi Bridge Program Participant</p>
                <p className="exp-company">CSIPL Chennai</p>
              </div>

            </div>
            <ul className="exp-bullets">
              <li>Selected for a competitive industry immersion in real-world banking &amp; fintech systems.</li>
              <li>Participated in corporate problem-solving bridging academic and production concepts.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
