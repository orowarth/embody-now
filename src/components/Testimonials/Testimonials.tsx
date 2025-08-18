import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Stella',
    quote: 'Monique shows such a high level of integrity and trust that I was able to completely submit myself to the Craniosacral Therapy sessions. The results have been amazing. Combined with Qi Gong weekly sessions I now know my whole health is an optimum achievable goal that I can work towards with confidence.',
  },
  {
    name: 'Charlotte',
    quote: 'I went to see Monique with upper back and neck pain. After working with Monique for a series of Craniosacral sessions my pain was gone, in addition to having experienced a lovely therapeutic and relaxing treatment. Monique has a wonderful energy that calms the nervous system and allows the body to do it’s thing and heal itself. I would recommend her treatments to anyone experiencing pain.',
  },
  {
    name: 'Gail',
    quote: 'Monique is an inspirational teacher. Her Qi Gong classes are transporting, profoundly restful and vitalising. I continue to learn and benefit greatly from her intuitive teaching style.',
  },
  {
    name: 'Diane',
    quote: "I love Monique's Somatic Qi Gong online classes. My body benefits, my ideas are expanded and I experience bliss and a sense of wellbeing. I have had two online Somatic Enquiry sessions that were powerful and effective.",
  },
  {
    name: 'Tiffany',
    quote: "I have attended many classes (and several workshops) over the past 10 years in person and via Zoom... Each week, I am led to move my body in a gentle and intentional way... I often find myself processing and expressing emotions that have been tightly held or unknowingly suppressed and always feel safe and supported to honour my physical and emotional needs in the moment. Monique brings a wealth of knowledge and experience, a grounded & embodied presence, and a sprinkle of inspiration to every class.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      }
      setIsAnimating(false);
    }, 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-intro">
        <h2>Client Stories</h2>
        <p>Past clients share their experience</p>
      </div>

      <div className="carousel-wrapper">
        <div className={`testimonial-card ${isAnimating ? 'is-animating' : ''}`}>
          <div className="testimonial-content">
            <p className="testimonial-quote">“{currentTestimonial.quote}”</p>
            <p className="testimonial-name">— {currentTestimonial.name}</p>
          </div>
        </div>
        <button className="carousel-button prev" onClick={() => handleNavigate('prev')} aria-label="Previous testimonial">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </button>
        <button className="carousel-button next" onClick={() => handleNavigate('next')} aria-label="Next testimonial">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        </button>
      </div>
    </section>
  );
}