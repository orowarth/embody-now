import './About.css';
import headshotImage from '../../assets/headshot.jpeg';

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <h2>About Me</h2>
        
        <div className="about-columns">
          
          <div className="about-image-wrapper">
            <img src={headshotImage} alt="A portrait of Monique Rocard" />
          </div>

          <div className="about-text-wrapper">
            <p>
              I’m Monique Rocard, a trauma-informed practitioner with deep respect for the body’s
              natural wisdom and its remarkable ability to heal itself. I help my clients reconnect
              with calm, clarity, and resilience by guiding them into deeply relaxed, embodied
              states where true restoration can happen.
            </p>
            <p>
              Since 2009, I have been a qualified Biodynamic Craniosacral Therapist, and I’ve
              also trained in Body Intelligence Qi Gong and Wellness Coaching. I’m passionate
              about Polyvagal Theory (the science of the vagus nerve), which continues to inspire
              and shape my work.
            </p>
            <p>
              I provide Biodynamic Craniosacral Therapy sessions, online Somatic Enquiry
              appointments, weekly online Qi Gong classes. I also offer Qi Gong workshops, and
              Vital Reset retreats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}