import './ServiceCard.css';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  variant: 'dark' | 'light';
  shape: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';
  className?: string;
  slug: string;
}

export function ServiceCard({ title, subtitle, description, variant, shape, className, slug }: ServiceCardProps) {
  const cardClassName = `service-card variant-${variant} shape-${shape} ${className || ''}`;

  return (
    <div className={cardClassName}>
      <h3>{title}</h3>
      <p className="service-card-subtitle">{subtitle}</p>
      <p>{description}</p>
      <div className="service-card-buttons">
        <Link to={`/services/${slug}`} className="service-button learn-more">
          Learn More
        </Link>
        <Link to="/contact" className="service-button book-now">Book Now</Link>
      </div>
    </div>
  );
}