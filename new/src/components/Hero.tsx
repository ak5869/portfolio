import React, { useEffect, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import profilePlaceholder from '../assets/profile-placeholder.jpg';

const roles = [
  'ML Engineer',
  'AI Engineer',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="hero">
      {/* Animated orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container hero-inner">
        {/* Left: text */}
        <div className="hero-content animate-fade-in">
          <span className="hero-subtitle">Hey there, I'm</span>
          <h1 className="hero-title">Abhiraami K</h1>
          <div className="hero-role">
            <span className="hero-role-text">{displayed}</span>
            <span className="hero-cursor">|</span>
          </div>
          <p className="hero-description">
            Passionate about building intelligent systems — from AI agents
            to machine learning models. I love turning complex ideas into clean,
            impactful solutions.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
            <a
              href="/resume.pdf"
              download="Abhiraami_K_Resume.pdf"
              className="btn btn-download"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* Right: profile photo */}
        <div className="hero-photo-wrapper animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="hero-photo-ring">
            <div className="hero-photo-frame">
              {/*
                To add your photo:
                1. Place your image file inside src/assets/ (e.g. profile.jpg)
                2. Replace the <img> src below with your image import
              */}
              <img
                src={profilePlaceholder}
                alt="Abhiraami K"
                className="hero-photo-img"
              />
              <div className="hero-photo-overlay">
                <span>Add Photo</span>
                <small>Replace src/assets/profile-placeholder.svg</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
