import './ContactPage.css';
import { socialLinks } from '../../data/siteData';

const phoneLink = socialLinks.find(link => link.name === 'Phone');
const emailLink = socialLinks.find(link => link.name === 'Email');
const displaySocials = socialLinks.filter(
  link => link.name === 'Facebook' || link.name === 'Instagram'
);

const LocationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>);
const SocialMediaIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>);

export function ContactPage() {
  return (
    
    <div className="contact-page-wrapper">
      <div className="contact-intro">
        <p>Let's Connect</p>
        <h1>Contact</h1>
        <p>If you have any questions or want to find out more, please don’t hesitate to get in touch.</p>
      </div>

      <div className="contact-main-content">
        <div className="contact-details">
          <div className="detail-item">
            <LocationIcon />
            <div className="address-block">
              <h3>Milford Clinic</h3>
              <h4>Your Wellbeing</h4>
              <p>3 Milford Road, Milford<br/>(through the arcade upstairs in the Your Wellbeing Clinic)</p>
            </div>
            
            <div className="address-block">
              <h3>Westmere Clinic</h3>
              <h4>Seven Senses</h4>
              <p>100 Westend Road, Westmere</p>
            </div>
          </div>

          {phoneLink && (
            <div className="detail-item">
              <phoneLink.Icon />
              <h3>Phone</h3>
              <a href={phoneLink.href}>{phoneLink.href.replace('tel:', '')}</a>
            </div>
          )}

          {emailLink && (
            <div className="detail-item">
              <emailLink.Icon />
              <h3>Email</h3>
              <a href={emailLink.href}>{emailLink.href.replace('mailto:', '')}</a>
            </div>
          )}

          <div className="detail-item">
            <SocialMediaIcon />
            <h3>Social Media</h3>
            <div className="contact-social-icons">
              {displaySocials.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form action="https://formspree.io/f/meozderd" method="POST">
            <div className="form-row"><div className="form-group"><label htmlFor="first-name">First Name</label><input type="text" id="first-name" name="First Name" /></div><div className="form-group"><label htmlFor="last-name">Last Name</label><input type="text" id="last-name" name="Last Name" /></div></div>
            <div className="form-group"><label htmlFor="email">Email *</label><input type="email" id="email" name="Email" required /></div>
            <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="Message" rows={5}></textarea></div>
            <button type="submit" className="contact-submit-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}