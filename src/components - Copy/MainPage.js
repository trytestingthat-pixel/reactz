import {COMPANY_INFO,STATS} from "./basicinfo"
import './MainPage.css';
import React from 'react';

// Content Variables
const COMPANY_DATA = {
  name: COMPANY_INFO.NAME ,
  slogan:COMPANY_INFO.SLOGAN ,
  description:COMPANY_INFO.DESCRIPTION ,
  address:COMPANY_INFO.ADDRESS ,
  phone: COMPANY_INFO.PHONE ,
  email: COMPANY_INFO.EMAIL ,
  yearsExperience:STATS.YEARS_EXPERIENCE,
  projectsCompleted:STATS.PROJECTS_COMPLETED,
  happyClients:STATS.HAPPY_CLIENTS
};

// Online Icons
const ICONS = {
  bed: "https://api.iconify.design/mdi:bed.svg",
  bath: "https://api.iconify.design/mdi:shower.svg",
  area: "https://api.iconify.design/mdi:square.svg",
  location: "https://api.iconify.design/mdi:map-marker.svg",
  phone: "https://api.iconify.design/mdi:phone.svg",
  email: "https://api.iconify.design/mdi:email.svg",
  address: "https://api.iconify.design/mdi:map-marker.svg",
  clock: "https://api.iconify.design/mdi:clock.svg"
};

// Property Images
const PROPERTY_IMAGES = {
  featured1: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500",
  featured2: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500",
  featured3: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500",
  service1: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  service2: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300",
  service3: "https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg?auto=compress&cs=tinysrgb&w=600",
  service4: "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&w=600"
};

// Featured Properties Data
const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Luxury 4BHK Apartment",
    location: "Amin Model Town, Savar",
    price: "৳ 65 Lac",
    beds: 4,
    baths: 3,
    sqft: "1650",
    image: PROPERTY_IMAGES.featured1
  },
  {
    id: 2,
    title: "Modern 3BHK Flat",
    location: "Savar Cantonment",
    price: "৳ 48 Lac",
    beds: 3,
    baths: 2,
    sqft: "1350",
    image: PROPERTY_IMAGES.featured2
  },
  {
    id: 3,
    title: "Executive 2BHK Apartment",
    location: "Ashulia",
    price: "৳ 35 Lac",
    beds: 2,
    baths: 2,
    sqft: "1100",
    image: PROPERTY_IMAGES.featured3
  }
];

// Services Data with Images
const SERVICES = [
  {
    icon: "https://api.iconify.design/mdi:home.svg",
    image: PROPERTY_IMAGES.service1,
    title: "Property Buying",
    description: "Complete assistance in finding and purchasing your dream property"
  },
  {
    icon: "https://api.iconify.design/mdi:currency-usd.svg",
    image: PROPERTY_IMAGES.service2,
    title: "Property Valuation",
    description: "Accurate market valuation for informed investment decisions"
  },
  {
    icon: "https://api.iconify.design/mdi:scale-balance.svg",
    image: PROPERTY_IMAGES.service3,
    title: "Legal Services",
    description: "Comprehensive legal support for property transactions"
  },
  {
    icon: "https://api.iconify.design/mdi:tools.svg",
    image: PROPERTY_IMAGES.service4,
    title: "Property Management",
    description: "Professional management services for rental properties"
  }
];

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>{COMPANY_DATA.yearsExperience}</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>{COMPANY_DATA.projectsCompleted}</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>{COMPANY_DATA.happyClients}</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Properties</h2>
            <p>Handpicked selection of premium properties</p>
          </div>
          <div className="properties-grid">
            {FEATURED_PROPERTIES.map(property => (
              <div key={property.id} className="property-card">
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <div className="property-badge">Featured</div>
                </div>
                <div className="property-content">
                  <h3>{property.title}</h3>
                  <p className="property-location">
                    <img src={ICONS.location} alt="Location" className="icon" />
                    {property.location}
                  </p>
                  <div className="property-features">
                    <span>
                      <img src={ICONS.bed} alt="Bed" className="icon" />
                      {property.beds} Beds
                    </span>
                    <span>
                      <img src={ICONS.bath} alt="Bath" className="icon" />
                      {property.baths} Baths
                    </span>
                    <span>
                      <img src={ICONS.area} alt="Area" className="icon" />
                      {property.sqft} Sq.Ft
                    </span>
                  </div>
                  <div className="property-price">{property.price}</div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="premium-services">
        <div className="container">
          <div className="section-header">
            <h2>Our Premium Services</h2>
            <p>Comprehensive real estate solutions for all your needs</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="service-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Apartments Showcase */}
      <section className="luxury-section">
        <div className="container">
          <div className="luxury-content">
            <div className="luxury-text">
              <h2>Luxury Apartments in Prime Locations</h2>
              <p>Experience unparalleled luxury with our premium apartment collections featuring modern amenities, strategic locations, and exceptional craftsmanship.</p>
              <ul className="luxury-features">
                <li>✓ Premium Locations in Dhaka</li>
                <li>✓ Modern Architectural Design</li>
                <li>✓ High-Quality Construction</li>
                <li>✓ 24/7 Security & Maintenance</li>
                <li>✓ Flexible Payment Plans</li>
              </ul>
              <button className="cta-button">Explore Luxury Properties</button>
            </div>
            <div className="luxury-images">
              <div className="image-grid">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400" alt="Luxury Apartment" />
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400" alt="Modern Interior" />
                <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400" alt="Premium Design" />
              </div>
            </div>
          </div>
        </div>
      </section>



      <style jsx>{`
        .main-page {
          font-family: 'Montserrat', sans-serif;
        }

        /* Statistics Section */
        .stats-section {
          background: #f8f9fa;
          padding: 4rem 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-item h3 {
          font-size: 3rem;
          font-weight: 700;
          color: #d4af37;
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          font-size: 1.1rem;
          color: #666;
          font-weight: 500;
        }

        /* Featured Properties */
        .featured-section {
          padding: 5rem 0;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .properties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .property-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .property-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .property-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .property-card:hover .property-image img {
          transform: scale(1.1);
        }

        .property-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #d4af37;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .property-content {
          padding: 1.5rem;
        }

        .property-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--secondary-color);
        }

        .property-location {
          color: #666;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .property-features {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eee;
        }

        .property-features span {
          font-size: 0.9rem;
          color: #666;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .icon {
          width: 16px;
          height: 16px;
        }

        .property-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #d4af37;
          margin-bottom: 1rem;
        }

        .view-details-btn {
          width: 100%;
          background: #0d47a1;
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-details-btn:hover {
          background: #083c8a;
        }

        /* Premium Services Section */
        .premium-services {
          padding: 5rem 0;
          background: #f8f9fa;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .service-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-icon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: white;
          padding: 0.5rem;
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .service-icon img {
          width: 24px;
          height: 24px;
        }

        .service-content {
          padding: 1.5rem;
          text-align: center;
        }

        .service-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .service-content p {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .service-btn {
          background: transparent;
          color: #0d47a1;
          border: 2px solid #0d47a1;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .service-btn:hover {
          background: #0d47a1;
          color: white;
        }

        /* Luxury Section */
        .luxury-section {
          padding: 5rem 0;
          background: white;
        }

        .luxury-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .luxury-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--secondary-color);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .luxury-text p {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .luxury-features {
          list-style: none;
          margin-bottom: 2rem;
        }

        .luxury-features li {
          padding: 0.5rem 0;
          font-size: 1.1rem;
          color: var(--secondary-color);
        }

        .cta-button {
          background: #d4af37;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #b8941f;
          transform: translateY(-2px);
        }

        .luxury-images .image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .luxury-images img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .luxury-images img:nth-child(1) {
          grid-column: 1 / -1;
          height: 250px;
        }

        /* New Contact Section - Isolated CSS */
        .contact-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .contact-info > p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }

        .contact-icon {
          width: 24px;
          height: 24px;
        }

        .contact-item h4 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }

        .contact-item p {
          margin: 0;
          opacity: 0.9;
        }

        .contact-form {
          background: rgba(255,255,255,0.95);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          background: white;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #1e40af;
        }

        .submit-btn {
          width: 100%;
          background: #d4af37;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: #b8941f;
          transform: translateY(-2px);
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .properties-grid {
            grid-template-columns: 1fr;
          }

          .luxury-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .luxury-images .image-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .property-features {
            flex-direction: column;
            gap: 0.5rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default MainPage;