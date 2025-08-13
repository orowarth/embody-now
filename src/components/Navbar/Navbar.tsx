import { useState } from 'react';
import './Navbar.css';
import logoIcon from '../../assets/logo.png';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '#about' },
  { text: 'Services', href: '#services' },
  { text: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar-container">
      <a href="/" className="navbar-logo">
        <img src={logoIcon} alt="Embody Now Logo" />
      </a>

      <nav className="navbar-links-desktop">
        <ul>
          {navLinks.map((link) => (
            <li key={link.text}><a href={link.href}>{link.text}</a></li>
          ))}
        </ul>
      </nav>

      <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
        <div /><div /><div />
      </button>
      <nav className={`navbar-links-mobile ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}>&times;</button>
        <ul>
          {navLinks.map((link) => (
            <li key={link.text}><a href={link.href} onClick={toggleMenu}>{link.text}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}