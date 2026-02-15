import { useParams } from 'react-router-dom';
import './ServicePage.css';
import { services } from '../../data/serviceData';
import { Link } from 'react-router-dom';


export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !services[slug]) {
    return <div className="service-page-container"><h2>Service not found</h2></div>;
  }

  const data = services[slug];

  return (
    <div className="service-page-container">
      <h1>{data.title}</h1>
      
      <blockquote className="service-page-quote">
        <p>"{data.quote.text}"</p>
        <footer>- {data.quote.author}</footer>
      </blockquote>

      {data.imageSrc && (
        <div className="service-page-image-wrapper">
          <img src={data.imageSrc} alt={`${data.title} banner`} />
        </div>
      )}

      {data.sections.map((section, index) => (
        <div key={index} className="service-page-section">
          <div className="section-header">
            <h2>{section.title}</h2>
            {section.buttonText && <Link to="/contact" className="section-button">{section.buttonText}</Link>}          </div>
          {section.paragraphs.map((p, pIndex) => (
            <p key={pIndex}>{p}</p>
          ))}
        </div>
      ))}

      {(data.prices && data.prices.length > 0) && (
        <div className="service-page-prices-section">
          {data.prices.map((priceCategory, categoryIndex) => (
            <div key={categoryIndex} className="price-category">
              <h3>{priceCategory.title}</h3>
              <ul>
                {priceCategory.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {(data.videos && data.videos.length > 0) && (
        <div className="videos-container">
          {data.videos.map(video => (
            <div key={video.id} className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}