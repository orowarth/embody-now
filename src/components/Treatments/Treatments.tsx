import './Treatments.css';
import { ServiceCard } from './ServiceCard/ServiceCard';
import handsImage from '../../assets/hands.jpg';
import headImage from '../../assets/head.jpg';

const cardDisplayData = [
  {
    slug: 'biodynamic-craniosacral-therapy',
    title: 'Biodynamic Craniosacral Therapy',
    subtitle: 'gentle embodied healing',
    description: 'Biodynamic Craniosacral Therapy is a gentle, hands-on approach that uses light touch to support the body’s natural ability to heal.',
    variant: 'light',
    shape: 'top-left',
    className: 'is-offset',
  },
  {
    slug: 'somatic-flow-qi-gong',
    title: 'Somatic Flow Qi Gong',
    subtitle: 'transformational mindful movement',
    description: 'Somatic Qi Gong is a gentle, intuitive movement practice that combines traditional Qi Gong with somatic and trauma-informed principles.',
    variant: 'dark',
    shape: 'top-right',
    className: '',
  },
  {
    slug: 'retreats-workshops',
    title: 'Retreats & Workshops',
    subtitle: 'an embodied pause',
    description: 'Join us for nourishing retreats that weaves together restorative Qi Gong, gentle somatic practices, creativity, deep rest, and time in nature.',
    variant: 'light',
    shape: 'bottom-left',
    className: 'is-offset',
  },
  {
    slug: 'somatic-enquiry',
    title: 'Somatic Enquiry',
    subtitle: 'body led dialogue',
    description: 'Somatic Enquiry is an online, gently guided process that draws on craniosacral principles to support deeper connection with your body.',
    variant: 'dark',
    shape: 'bottom-right',
    className: '',
  },
] as const;

export function Treatments() {
  return (
    <section id="services" className="treatments-section">
      <div className="treatments-intro">
        <h2>Treatments & Classes</h2>
        <p>
          Whether through in-person Craniosacral Therapy, online Somatic Enquiry, or weekly
          online Somatic Flow Qi Gong classes, my work invites you into a space of deep stillness,
          inner listening, and embodied awareness. Each pathway is designed to support your nervous system to settle, unwind tension, and reconnect with your body’s innate capacity to heal—always gently, and always at your pace.
        </p>
      </div>

      <div className="treatments-grid">
        <ServiceCard {...cardDisplayData[0]} />
        <ServiceCard {...cardDisplayData[1]} />
        
        <div className="grid-image-wrapper">
          <img src={headImage} alt="A person receiving craniosacral therapy" />
        </div>
        <div className="grid-image-wrapper">
          <img src={handsImage} alt="Hands performing Qi Gong" />
        </div>

        <ServiceCard {...cardDisplayData[2]} />
        <ServiceCard {...cardDisplayData[3]} />
      </div>
    </section>
  );
}