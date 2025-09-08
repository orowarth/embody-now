import { useState, useRef, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoIcon from '../../assets/logo.png';
import { services } from '../../data/serviceData';
import { MobileServicesPanel } from './MobileServicesPanel';

interface NavLinkItem {
  text: string;
  to: string;
  isDropdown?: boolean;
}

const navLinks: NavLinkItem[] = [
  { text: 'Home', to: '/#' },
  { text: 'About', to: '/#about' },
  { text: 'Services', to: '#', isDropdown: true },
  { text: 'Contact', to: '/contact' },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`chevron-icon ${open ? 'open' : ''}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const servicesDropdownRef = useRef<HTMLLIElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleServicesDropdownToggle = () => {
    if (window.innerWidth <= 820) {
      setIsServicesDropdownOpen((prev) => !prev);
    }
  };

  const handleServicesDropdownOpen = () => {
    if (window.innerWidth > 820) setIsServicesDropdownOpen(true);
  };

  const handleServicesDropdownClose = () => {
    if (window.innerWidth > 820) setIsServicesDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
      if (
        isServicesDropdownOpen &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(target) &&
        window.innerWidth > 820
      ) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, isServicesDropdownOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820 && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const serviceLinks = Object.entries(services).map(([slug, service]) => ({
    text: service.title,
    to: `/services/${slug}`,
  }));

  return (
    <header className="navbar-container">
      <NavHashLink smooth to="/#" className="navbar-logo">
        <img src={logoIcon} alt="Embody Now Logo" />
      </NavHashLink>

      <nav className="navbar-links-desktop">
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.text}
              ref={link.isDropdown ? servicesDropdownRef : null}
              onMouseEnter={link.isDropdown ? handleServicesDropdownOpen : undefined}
              onMouseLeave={link.isDropdown ? handleServicesDropdownClose : undefined}
              className={link.isDropdown ? 'dropdown' : ''}
            >
              {link.isDropdown ? (
                <>
                  <button
                    onClick={handleServicesDropdownToggle}
                    className={`nav-link dropdown-toggle ${isServicesDropdownOpen ? 'active' : ''}`}
                    aria-expanded={isServicesDropdownOpen}
                  >
                    {link.text}
                    <ChevronIcon open={isServicesDropdownOpen} />
                  </button>
                  
                  <ul className={`dropdown-menu ${isServicesDropdownOpen ? 'open' : ''}`}>
                    {serviceLinks.map((serviceLink) => (
                      <li key={serviceLink.to}>
                        <Link
                          to={serviceLink.to}
                          className="dropdown-item"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          {serviceLink.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavHashLink
                  smooth
                  to={link.to}
                  scroll={link.to.includes('#') && link.to.length > 2 ? scrollWithOffset : undefined}
                  className="nav-link"
                >
                  {link.text}
                </NavHashLink>
              )}
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
      <button className="close-menu" onClick={toggleMenu} aria-label="Close menu">&times;</button>
        <ul>
          {navLinks.map((link) => (
            <li key={link.text}>
              {link.isDropdown ? (
                <>
                  <button
                    onClick={() => setIsServicesDropdownOpen((p) => !p)}
                    className={`dropdown-toggle ${isServicesDropdownOpen ? 'active' : ''} nav-link-mobile`}
                    aria-expanded={isServicesDropdownOpen}
                    aria-controls="mobile-services-panel"
                  >
                    {link.text}
                    <ChevronIcon open={isServicesDropdownOpen} />
                  </button>

                  <MobileServicesPanel
                    id="mobile-services-panel"
                    open={isServicesDropdownOpen}
                    links={serviceLinks}
                    onNavigate={() => { setIsServicesDropdownOpen(false); toggleMenu(); }}
                  />
                </>
              ) : (
                <NavHashLink
                  smooth
                  to={link.to}
                  scroll={link.to.includes('#') && link.to.length > 2 ? scrollWithOffset : undefined}
                  onClick={toggleMenu}
                  className="nav-link-mobile"
                >
                  {link.text}
                </NavHashLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
