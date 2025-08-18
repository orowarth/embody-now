import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Treatments } from '../../components/Treatments/Treatments';
import { Testimonials } from '../../components/Testimonials/Testimonials';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <hr className="section-divider" />
      <Treatments />
      <hr className="section-divider" />
      <Testimonials />
    </>
  );
}