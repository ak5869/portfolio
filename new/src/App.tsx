import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Auto-cycle every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="app">
      <Navbar theme={theme} onToggle={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Abhiraami K. Built with passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;