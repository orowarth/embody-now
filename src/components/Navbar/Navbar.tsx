import { useState, useRef, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css';
import logoIcon from '../../assets/logo.svg';

const navLinks = [
  { text: 'Home', to: '/#' }, 
  
  { text: 'About', to: '/#about' },
  { text: 'Services', to: '/#services' },
  { text: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <header className="navbar-container">
      <NavHashLink smooth to="/#" className="navbar-logo">
        <img src={logoIcon} alt="Embody Now Logo" />
      </NavHashLink>

      <nav className="navbar-links-desktop">
        <ul>
          {navLinks.map((link) => (
            <li key={link.text}>
              <NavHashLink 
                smooth 
                to={link.to}
                scroll={link.to.includes('#') && link.to.length > 2 ? scrollWithOffset : undefined}
                className={({ isActive }) => (isActive && link.to.length > 1) ? "nav-link active" : "nav-link"}
              >
                {link.text}
              </NavHashLink>
            </li>
          ))}
        </ul>
      </nav>

      <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
        <div />
        <div />
        <div />
      </button>

      <nav ref={menuRef} className={`navbar-links-mobile ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}>&times;</button>
        <ul>
          {navLinks.map((link) => (
            <li key={link.text}>
              <NavHashLink 
                smooth 
                to={link.to} 
                scroll={link.to.includes('#') && link.to.length > 2 ? scrollWithOffset : undefined}
                onClick={toggleMenu}
              >
                {link.text}
              </NavHashLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}