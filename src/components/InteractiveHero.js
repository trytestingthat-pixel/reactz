// components/InteractiveHero.jsx
import React, { useState, useEffect, useRef } from 'react';
import './InteractiveHero.css';
import { STATS } from "./basicinfo.js";

// Icon URLs (Replace emojis with actual icons)
const ICONS = {
  search: 'https://cdn-icons-png.flaticon.com/512/54/54481.png',
  ar: 'https://cdn-icons-png.flaticon.com/512/3468/3468374.png',
  voice: 'https://cdn-icons-png.flaticon.com/512/2583/2583278.png',
  ai: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
  floorPlan: 'https://cdn-icons-png.flaticon.com/512/3094/3094846.png',
  virtualTour: 'https://cdn-icons-png.flaticon.com/512/2997/2997940.png',
  calculator: 'https://cdn-icons-png.flaticon.com/512/3448/3448598.png',
  rotate: 'https://cdn-icons-png.flaticon.com/512/786/786353.png',
  zoom: 'https://cdn-icons-png.flaticon.com/512/709/709586.png',
  floors: 'https://cdn-icons-png.flaticon.com/512/619/619032.png',
  sunny: 'https://cdn-icons-png.flaticon.com/512/6974/6974833.png',
  cloudy: 'https://cdn-icons-png.flaticon.com/512/414/414927.png',
  rainy: 'https://cdn-icons-png.flaticon.com/512/3351/3351979.png'
};

// Content & Assets
const HERO_CONTENT = {
  title: "Discover Your Dream Property in Prime Dhaka Locations",
  subtitle: "Luxury Apartments • Premium Villas • Commercial Spaces",
  languages: {
    en: "English",
     bn: "বাংলা"
    // , 
    // ar: "العربية",
    // hi: "हिन्दी",
    // zh: "中文"
  }
};
// consts from config

const Experience = STATS.YEARS_EXPERIENCE
const Properties = STATS.PROJECTS_COMPLETED
const HAPPY_CLIENTS = STATS.HAPPY_CLIENTS

const PROPERTY_IMAGES = [
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
  "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
  "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg",
  "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg"
];

const InteractiveHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('en');
  const [typedText, setTypedText] = useState('');
  const [particles, setParticles] = useState([]);
  const [weather, setWeather] = useState({ temp: 28, condition: 'sunny' });
  const heroRef = useRef(null);

  // Typewriter Effect
  useEffect(() => {
    const text = HERO_CONTENT.title;
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  // Particle Animation
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5
    }));
    setParticles(newParticles);
  }, []);

  // Property Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROPERTY_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Weather Simulation
  useEffect(() => {
    const conditions = ['sunny', 'cloudy', 'rainy'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    setWeather({ temp: 25 + Math.floor(Math.random() * 10), condition: randomCondition });
  }, []);

  // Voice Search
  const startVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Voice search:', transcript);
      };
      
      recognition.start();
    } else {
      alert('Voice search not supported on this device');
    }
  };

  // AR Preview Simulation
  const launchARPreview = () => {
    alert('AR Preview: Point your camera at a flat surface to view the property in augmented reality!');
  };

  // Get weather icon
  const getWeatherIcon = () => {
    return ICONS[weather.condition] || ICONS.sunny;
  };

  return (
    <div className="interactive-hero" ref={heroRef}>
      {/* Parallax Background Layers */}
      <div className="parallax-layer layer-1"></div>
      <div className="parallax-layer layer-2"></div>
      <div className="parallax-layer layer-3"></div>
      
      {/* Particle Animation */}
      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.speed}s`
            }}
          />
        ))}
      </div>

      {/* Weather Display */}
      <div className="weather-widget">
        <div className="weather-icon">
          <img 
            src={getWeatherIcon()} 
            alt={weather.condition}
            width="24"
            height="24"
          />
        </div>
        <span className="weather-temp">{weather.temp}°C</span>
      </div>

      {/* Multi-language Selector */}
      <div className="language-selector">
        {Object.entries(HERO_CONTENT.languages).map(([code, name]) => (
          <button
            key={code}
            className={`lang-btn ${activeLanguage === code ? 'active' : ''}`}
            onClick={() => setActiveLanguage(code)}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="content-wrapper">
          {/* Animated Typography */}
          <h1 className="animated-title">
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </h1>
          
          <p className="hero-subtitle">{HERO_CONTENT.subtitle}</p>

          {/* Dynamic Statistics */}
          <div className="stats-counter">
            <div className="stat">
              <span className="counter" data-target="150">{Properties}</span>
              <span>Properties</span>
            </div>
            <div className="stat">
              <span className="counter" data-target="1000">{HAPPY_CLIENTS}</span> 
              <span>Happy Clients</span>
            </div>
            <div className="stat">
              <span className="counter" data-target="15">{Experience}</span>
              <span>Years Experience</span>
            </div>
          </div>

          {/* Morphing Search Form */}
          <div className={`search-container ${isSearchExpanded ? 'expanded' : ''}`}>
            <div className="search-glass">
              <div className="search-header">
                <button 
                  className="search-tab active"
                  onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                >
                  <img src={ICONS.search} alt="Search" width="16" height="16" />
                  Smart Search
                </button>
                <button className="search-tab" onClick={launchARPreview}>
                  <img src={ICONS.ar} alt="AR" width="16" height="16" />
                  AR Preview
                </button>
                <button className="voice-search" onClick={startVoiceSearch}>
                  <img src={ICONS.voice} alt="Voice" width="16" height="16" />
                  Voice Search
                </button>
              </div>
              
              <div className="search-body">
                <div className="search-grid">
                  <div className="search-field">
                    <label>Property Type</label>
                    <select>
                      <option>Any Type</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  
                  <div className="search-field">
                    <label>Location</label>
                    <select>
                      <option>Any Location</option>
                      <option>Savar Cantonment</option>
                      <option>Ashulia</option>
                      <option>Amin Model Town</option>
                    </select>
                  </div>
                  
                  <div className="search-field">
                    <label>Price Range</label>
                    <select>
                      <option>Any Price</option>
                      <option>৳ 20-40 Lac</option>
                      <option>৳ 40-60 Lac</option>
                      <option>৳ 60 Lac+</option>
                    </select>
                  </div>
                  
                  <button className="ai-recommend-btn">
                    {/* <img src={ICONS.ai} alt="AI" width="16" height="16" /> */}
                    Get Recommendations <br/>
                    <small>[will be available soon]</small>
                  </button>
                </div>

                {/* Interactive Map Preview */}
                <div className="map-preview">
                  <div className="location-hotspot" style={{top: '30%', left: '40%'}}>
                    <div className="hotspot-pulse"></div>
                    <div className="hotspot-tooltip">Savar Cantonment</div>
                  </div>
                  <div className="location-hotspot" style={{top: '50%', left: '60%'}}>
                    <div className="hotspot-pulse"></div>
                    <div className="hotspot-tooltip">Ashulia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Floor Plans & 360° Tours */}
          <div className="interactive-features">
            <button className="feature-btn" onClick={launchARPreview}>
              <img src={ICONS.floorPlan} alt="Floor Plans" width="18" height="18" />
              Interactive Floor Plans
            </button>
            <button className="feature-btn">
              <img src={ICONS.virtualTour} alt="Virtual Tour" width="18" height="18" />
              360° Virtual Tour
            </button>
            <button className="feature-btn">
              <img src={ICONS.calculator} alt="Calculator" width="18" height="18" />
              Property Calculator
            </button>
          </div>
        </div>
      </div>

      {/* Property Slideshow */}
      <div className="property-slideshow">
        {PROPERTY_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* 3D Building Showcase - Hidden on mobile */}
      <div className="building-showcase">
        <div className="building-3d">
          <div className="building-model">
            <div className="building-floor"></div>
            <div className="building-floor"></div>
            <div className="building-floor"></div>
            <div className="building-roof"></div>
          </div>
        </div>
        <div className="building-controls">
          <button className="control-btn">
            <img src={ICONS.rotate} alt="Rotate" width="14" height="14" />
            Rotate
          </button>
          <button className="control-btn">
            <img src={ICONS.zoom} alt="Zoom" width="14" height="14" />
            Zoom
          </button>
          <button className="control-btn">
            <img src={ICONS.floors} alt="Floors" width="14" height="14" />
            View Floors
          </button>
        </div>
      </div>

      {/* Video Background Fallback */}
      <video 
        className="video-background" 
        autoPlay 
        muted 
        loop 
        playsInline
        poster="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
      >
        <source src="/videos/property-showcase.mp4" type="video/mp4" />
      </video>

      {/* Gradient Morph Overlay */}
      <div className="gradient-morph"></div>
    </div>
  );
};

export default InteractiveHero;