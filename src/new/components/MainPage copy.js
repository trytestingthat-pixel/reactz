import React from 'react';
import './MainPage.css';

// Content Variables
const COMPANY_DATA = {
  name: "Nasir Real Estate & Developers LTD",
  slogan: "Premium Real Estate Solutions in Prime Locations",
  description: "Leading real estate company with large returning clients. Located at Amin Model Town, Savar Cantt Ashulia, Dhaka-1344. Managed by MD-headed board, non-shared organization.",
  address: "Amin Model Town, Savar Cantt Ashulia, Dhaka-1344, Bangladesh",
  phone: "+880 XXXX-XXXXXX",
  email: "info@nasirrealestate.com",
  yearsExperience: "15+",
  projectsCompleted: "50+",
  happyClients: "1000+"
};

// Property Images from Pexels (Direct working URLs)
const PROPERTY_IMAGES = {
  hero: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  featured1: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
  featured2: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
  featured3: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg",
  luxury1: "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg",
  luxury2: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
  luxury3: "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg"
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

// Services Data
const SERVICES = [
  {
    icon: "🏠",
    title: "Property Buying",
    description: "Complete assistance in finding and purchasing your dream property"
  },
  {
    icon: "💰",
    title: "Property Valuation",
    description: "Accurate market valuation for informed investment decisions"
  },
  {
    icon: "⚖️",
    title: "Legal Services",
    description: "Comprehensive legal support for property transactions"
  },
  {
    icon: "🔧",
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
                  <p className="property-location">{property.location}</p>
                  <div className="property-features">
                    <span>🛏 {property.beds} Beds</span>
                    <span>🚿 {property.baths} Baths</span>
                    <span>📐 {property.sqft} Sq.Ft</span>
                  </div>
                  <div className="property-price">{property.price}</div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Premium Services</h2>
            <p>Comprehensive real estate solutions for all your needs</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="service-btn">Learn More</button>
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
                <img src={PROPERTY_IMAGES.luxury1} alt="Luxury Apartment" />
                <img src={PROPERTY_IMAGES.luxury2} alt="Modern Interior" />
                <img src={PROPERTY_IMAGES.luxury3} alt="Premium Design" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;

