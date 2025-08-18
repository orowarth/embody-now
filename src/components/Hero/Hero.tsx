import './Hero.css';
import heroBackground from '../../assets/hero-background.jpg';

export function Hero() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero-container">
        <div className="hero-content-box">
          <h1>
            Cultivate Calm,<br />
            Restore Vitality
          </h1>
          <p>
            Through the combined wisdom of Biodynamic Craniosacral Therapy, Qi Gong and Somatic
            Enquiry, experience body-led, guided support to soften stress, restore
            balance, and return to your natural vitality.
          </p>
        </div>
      </div>
    </section>
  );
}