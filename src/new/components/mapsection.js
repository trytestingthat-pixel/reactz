import React, { useState, useEffect } from 'react';
import './mapsection.css';

const LocationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  const handleGetDirections = () => {
    window.open('https://maps.google.com/?q=Nasir+Tower+2,Dhaka,Bangladesh', '_blank');
  };

  return (
    <section className={`location-section ${isVisible ? 'visible' : ''}`}>
      <div className="location-container">
        
        {/* Professional Header */}
        <div className="location-header">
          <div className="section-badge">
            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" className="badge-icon" />
            <span>Our Location</span>
          </div>
          <h2 className="location-title">Visit Our  Office</h2>
          <p className="location-subtitle">
            Strategically situated at Nasir Tower 2 for maximum convenience and accessibility
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="location-content">
          
          {/* Map Section */}
          <div className="map-section">
            <div className="map-wrapper">
              {!isMapLoaded && (
                <div className="map-skeleton">
                  <div className="skeleton-loader"></div>
                  <p>Loading map...</p>
                </div>
              )}
              
              <div className={`map-container ${isMapLoaded ? 'loaded' : ''}`}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.11657124684362!2d90.271972484325!3d23.924979854434774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e9e0bf7362e1%3A0x85c70eacb0079c96!2sNasir%20Tower2!5e1!3m2!1sen!2sbd!4v1760076632185!5m2!1sen!2sbd"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={handleMapLoad}
                  title="Nasir Tower 2 Location"
                />
                
                {/* Map Overlay Marker */}
                <div className="map-overlay">
                  <div className="custom-marker">
                    <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Marker" />
                    <div className="marker-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="info-section">
            
            {/* Key Features */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/619/619032.png" alt="Building" />
                </div>
                <div className="feature-content">
                  <h4>Premium Tower</h4>
                  <p>Modern commercial space with modern facilities</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="Location" />
                </div>
                <div className="feature-content">
                  <h4>Prime Location</h4>
                  <p>Central business district with excellent connectivity</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="Parking" />
                </div>
                <div className="feature-content">
                  <h4>Ample Parking</h4>
                  <p>Secure parking facility available 24/7</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2088/2088573.png" alt="Security" />
                </div>
                <div className="feature-content">
                  <h4>24/7 Security</h4>
                  <p>Round-the-clock surveillance and security</p>
                </div>
              </div>
            </div>

            {/* Contact & Directions */}
            <div className="action-section">
              <div className="address-card">
                <h4>Address</h4>
                <div className="address-details">
                  <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Address" />
                  <div>
                    <p><strong>Nasir Tower 2</strong></p>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <button className="primary-btn" onClick={handleGetDirections}>
                  <img src="https://cdn-icons-png.flaticon.com/512/786/786205.png" alt="Directions" />
                  Get Directions
                </button>
                <button className="secondary-btn">
                  <img src="https://cdn-icons-png.flaticon.com/512/159/159469.png" alt="Save" />
                  Save Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;