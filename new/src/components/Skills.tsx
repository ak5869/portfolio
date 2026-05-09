import React from 'react';

interface Skill {
  name: string;
  logo: string;
  category: string;
}

const skills: Skill[] = [
  // Languages
  { name: 'Python',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', category: 'Language' },
  { name: 'Java',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', category: 'Language' },
  { name: 'C++',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', category: 'Language' },
  { name: 'SQL',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', category: 'Language' },
  // Backend
  { name: 'Flask',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', category: 'Backend' },
  { name: 'REST APIs',   logo: 'https://cdn.simpleicons.org/postman/FF6C37', category: 'Backend' },
  { name: 'FastAPI',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', category: 'Backend' },
  // Data & ML
  { name: 'Pandas',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', category: 'Data' },
  { name: 'LangChain',   logo: 'https://cdn.simpleicons.org/langchain/324c4c', category: 'AI' },
  { name: 'LLMs / RAG',  logo: 'https://cdn.simpleicons.org/huggingface', category: 'AI' },
  // DevOps & Cloud
  { name: 'Docker',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', category: 'DevOps' },
  { name: 'AWS',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'Cloud' },
  { name: 'GCP',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', category: 'Cloud' },
  { name: 'Git',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', category: 'Tools' },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card skill-item">
              <div className="skill-icon">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  style={{ width: '40px', height: '40px', objectFit: 'contain', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }} 
                />
              </div>
              <p style={{ fontWeight: '700', fontSize: '0.85rem' }}>{skill.name}</p>
              <span className="skill-category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
