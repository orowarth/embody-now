import './Footer.css';
import { socialLinks } from '../../data/siteData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = socialLinks.filter(link => link.name !== 'Phone');

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="social-icons">
          {footerLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              aria-label={`Link to ${link.name}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <link.Icon />
            </a>
          ))}
        </div>
        <p className="copyright-text">
          © {currentYear} Embody Now. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}