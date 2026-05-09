import React from 'react';
import { Cloud, BrainCircuit, Trophy, Star } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  issuer: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: <Cloud size={28} />,
    title: 'AWS ML Foundations',
    issuer: 'Amazon Web Services',
    description: 'Trained in cloud-based ML pipelines, deployment concepts, and scalable workflow design.',
  },
  {
    icon: <BrainCircuit size={28} />,
    title: 'Oracle OCI AI Certifications',
    issuer: 'Oracle Cloud Infrastructure · 2025',
    description: 'AI Foundations Associate & Generative AI Professional — covering LLMs, cloud AI/ML workflows, and generative AI systems.',
  },
  {
    icon: <Trophy size={28} />,
    title: 'ACM-W SRMIST Hackathon',
    issuer: 'SRMIST · AI Travel Planner',
    description: 'Secured 3rd Prize among competitive teams. Built a functional AI prototype within 24 hours with backend APIs and modular logic.',
  },
  {
    icon: <Star size={28} />,
    title: 'Citi Bridge Program',
    issuer: 'CSIPL Chennai',
    description: 'Selected among the top 50 students from 5000+ applicants for an industry immersion in banking systems and financial technology.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="glass-card achievement-card">
              <div className="achievement-icon-wrap">
                {item.icon}
              </div>
              <div className="achievement-body">
                <div className="achievement-header">
                  <div>
                    <h3 className="achievement-title">{item.title}</h3>
                    <p className="achievement-issuer">{item.issuer}</p>
                  </div>

                </div>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
