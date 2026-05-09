import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'AI Code Review Agent',
    description:
      'A scalable code review platform that automates issue analysis and generates structured feedback using a modular backend architecture.',
    tags: ['TypeScript', 'React', 'FastAPI', 'AI Agents'],
    link: 'https://github.com/ak5869/AI-Code-Review-Agent',
    github: 'https://github.com/ak5869/AI-Code-Review-Agent',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'RAG-Based Python Docs Assistant',
    description:
      'An AI-powered assistant that retrieves relevant Python documentation from ChromaDB and generates accurate answers using local Ollama LLMs via semantic embeddings.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'Ollama', 'RAG'],
    link: 'https://github.com/ak5869/RAG-Python-Docs',
    github: 'https://github.com/ak5869/RAG-Python-Docs',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Streaming Data ETL Pipeline',
    description:
      'A real-time data ingestion and analytics pipeline with automated validation, structured transformations, and efficient SQL-based reporting.',
    tags: ['Python', 'SQL', 'ETL', 'Data Engineering'],
    link: 'https://github.com/ak5869/ETL-Data-Pipeline-for-Streaming-Analytics',
    github: 'https://github.com/ak5869/ETL-Data-Pipeline-for-Streaming-Analytics',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="glass-card project-card">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={15} />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
