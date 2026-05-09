import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

const links = ['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'];

const Navbar = ({ theme, onToggle }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          Abhi<span>raami</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              onClick={onToggle}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
          <li>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.875rem' }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="nav-mobile-controls">
          <button
            className="theme-toggle"
            onClick={onToggle}
            aria-label="Toggle theme"
            style={{ display: 'flex' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
