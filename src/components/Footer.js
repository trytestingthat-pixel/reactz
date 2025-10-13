import { COMPANY_INFO, SOCIAL, STATS } from "./basicinfo";
import React, { useState, useEffect, useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTrophy,
  FaStar,
  FaShieldAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaCreditCard,
  FaUniversity,
  FaMobileAlt,
  FaCrown,
  FaChevronRight,
  FaBuilding,
  FaHome,
  FaChartLine,
  FaUser,
  FaQuestion,
  FaImages,
  FaPaintBrush,
  FaSearch,
  FaKey,
  FaTruck,
  FaRulerCombined,
  FaTree,
  FaVectorSquare,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import {
  MdApartment,
  MdVilla,
  MdBusinessCenter,
  MdLandscape,
  MdHouse,
  MdHomeWork,
  MdAttachMoney,
  MdDescription,
  MdManageAccounts,
} from "react-icons/md";
import { GiReceiveMoney, GiHouseKeys } from "react-icons/gi";
import {
  BsLightningCharge,
  BsDroplet,
  BsFire,
  BsBuilding,
} from "react-icons/bs";
import "./Footer.css";

// Government & Regulatory Portals
const GOVERNMENT_PORTALS = [
  {
    name: "Bangladesh Land Ministry",
    url: "https://land.gov.bd",
    category: "land_records",
  },
  {
    name: "RAJUK",
    url: "https://www.rajuk.gov.bd",
    category: "building_approval",
  },
  {
    name: "Dhaka South City Corporation",
    url: "https://www.dscc.gov.bd",
    category: "municipal",
  },
  {
    name: "Dhaka North City Corporation",
    url: "https://www.dncc.gov.bd",
    category: "municipal",
  },
  {
    name: "National Housing Authority",
    url: "https://www.nha.gov.bd",
    category: "housing",
  },
  {
    name: "REHAB",
    url: "https://www.rehab-bd.org",
    category: "real_estate_association",
  },
  {
    name: "Bangladesh Bank",
    url: "https://www.bb.org.bd",
    category: "banking_regulatory",
  },
  {
    name: "NBR Tax Portal",
    url: "https://www.nbr.gov.bd",
    category: "taxation",
  },
];

// Banking & Financial Institutions
const BANKING_PARTNERS = [
  {
    name: "Sonali Bank Home Loan",
    url: "https://www.sonalibank.com.bd",
    category: "home_loan",
  },
  {
    name: "Janata Bank Property Loan",
    url: "https://www.jb.com.bd",
    category: "home_loan",
  },
  {
    name: "IDLC Home Finance",
    url: "https://www.idlchf.com",
    category: "home_finance",
  },
  {
    name: "Delta BRAC Housing",
    url: "https://www.deltabrac.com",
    category: "home_finance",
  },
  {
    name: "DBH Home Loan",
    url: "https://www.dbh.com.bd",
    category: "home_loan",
  },
  {
    name: "Bangladesh Finance",
    url: "https://www.bdfinance.com.bd",
    category: "home_finance",
  },
  {
    name: "Premier Bank Home Loan",
    url: "https://www.premierbankltd.com",
    category: "home_loan",
  },
  {
    name: "Standard Bank Home Finance",
    url: "https://www.standardbankbd.com",
    category: "home_finance",
  },
];

// Utility Services
const UTILITY_SERVICES = [
  {
    name: "DESCO Bill Payment",
    url: "https://www.desco.org.bd",
    category: "electricity",
    icon: <BsLightningCharge />,
  },
  {
    name: "DPDC Online Services",
    url: "https://www.dpdc.org.bd",
    category: "electricity",
    icon: <BsLightningCharge />,
  },
  {
    name: "WASA Bill Payment",
    url: "https://www.dwasa.org.bd",
    category: "water",
    icon: <BsDroplet />,
  },
  {
    name: "Titas Gas Bill",
    url: "https://www.titasgas.org.bd",
    category: "gas",
    icon: <BsFire />,
  },
  {
    name: "DESCO Prepaid",
    url: "https://prepaid.desco.org.bd",
    category: "electricity",
    icon: <BsLightningCharge />,
  },
  {
    name: "Bangladesh Post Office",
    url: "https://www.bangladeshpost.gov.bd",
    category: "postal",
    icon: <FaEnvelope />,
  },
];

// Quick Links
const QUICK_LINKS = [
  { name: "Home", url: "/", icon: <MdHomeWork /> },
  { name: "Properties", url: "/properties", icon: <GiHouseKeys /> },
  { name: "Agents", url: "/agents", icon: <BsBuilding /> },
  { name: "About Us", url: "/about", icon: <FaUniversity /> },
  { name: "Contact", url: "/contact", icon: <FaPhone /> },
  { name: "Blog", url: "/blog", icon: <MdDescription /> },
  { name: "Careers", url: "/careers", icon: <FaUser /> },
  { name: "Testimonials", url: "/testimonials", icon: <FaStar /> },
  { name: "Gallery", url: "/gallery", icon: <FaImages /> },
  { name: "FAQ", url: "/faq", icon: <FaQuestion /> },
];

// Property Types
const PROPERTY_TYPES = [
  { name: "Apartments", url: "/apartments", icon: <MdApartment /> },
  { name: "Villas", url: "/villas", icon: <MdVilla /> },
  { name: "Commercial", url: "/commercial", icon: <MdBusinessCenter /> },
  { name: "Plots", url: "/plots", icon: <MdLandscape /> },
  { name: "Rentals", url: "/rentals", icon: <MdHouse /> },
  { name: "Luxury Homes", url: "/luxury", icon: <FaCrown /> },
  { name: "Duplex", url: "/duplex", icon: <FaBuilding /> },
  { name: "Penthouse", url: "/penthouse", icon: <FaHome /> },
  { name: "Studio", url: "/studio", icon: <FaVectorSquare /> },
  { name: "Farmhouse", url: "/farmhouse", icon: <FaTree /> },
];

// Popular Locations
const POPULAR_LOCATIONS = [
  {
    name: "Savar Cantonment",
    url: "/savar-cantonment",
    icon: <SiGooglemaps />,
  },
  { name: "Ashulia", url: "/ashulia", icon: <SiGooglemaps /> },
  { name: "Amin Model Town", url: "/amin-model-town", icon: <SiGooglemaps /> },
  { name: "Uttara", url: "/uttara", icon: <SiGooglemaps /> },
  { name: "Gulshan", url: "/gulshan", icon: <SiGooglemaps /> },
  { name: "Banani", url: "/banani", icon: <SiGooglemaps /> },
  { name: "Dhanmondi", url: "/dhanmondi", icon: <SiGooglemaps /> },
  { name: "Mirpur", url: "/mirpur", icon: <SiGooglemaps /> },
  { name: "Mohammadpur", url: "/mohammadpur", icon: <SiGooglemaps /> },
  { name: "Bashundhara R/A", url: "/bashundhara", icon: <SiGooglemaps /> },
  { name: "Baridhara", url: "/baridhara", icon: <SiGooglemaps /> },
  { name: "Motijheel", url: "/motijheel", icon: <SiGooglemaps /> },
];

// Services
const SERVICES = [
  { name: "Buying Assistance", url: "/buying", icon: <GiReceiveMoney /> },
  { name: "Selling Services", url: "/selling", icon: <MdAttachMoney /> },
  { name: "Property Valuation", url: "/valuation", icon: <FaUniversity /> },
  { name: "Legal Documentation", url: "/legal", icon: <MdDescription /> },
  { name: "Home Loan Assistance", url: "/home-loan", icon: <FaCreditCard /> },
  {
    name: "Property Management",
    url: "/management",
    icon: <MdManageAccounts />,
  },
  { name: "Interior Design", url: "/interior-design", icon: <FaPaintBrush /> },
  { name: "Property Inspection", url: "/inspection", icon: <FaSearch /> },
  { name: "Rental Management", url: "/rental-management", icon: <FaKey /> },
  {
    name: "Investment Consultation",
    url: "/investment",
    icon: <FaChartLine />,
  },
  { name: "Relocation Services", url: "/relocation", icon: <FaTruck /> },
  {
    name: "Architectural Design",
    url: "/architectural",
    icon: <FaRulerCombined />,
  },
];

const Footer = () => {
  const [activeSection, setActiveSection] = useState("company");
  const [isScrolled, setIsScrolled] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`modern-footer ${isScrolled ? "scrolled" : ""}`}
      ref={footerRef}
    >
      {/* Floating Action Buttons */}
      <div className="footer-floating-actions">
        <button className="floating-btn contact-btn" title="Contact Us">
          <a href={`tel:COMPANY_INFO.PHONE`}>
                  <FaPhone />
          </a>
        </button>
        <button className="floating-btn whatsapp-btn" title="WhatsApp">
          <a
            href={`https://api.whatsapp.com/send?phone=${SOCIAL.WHATSAPP}`}
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </button>
        <button
          className="floating-btn scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-main-grid">
        {/* Brand Section - Left Side */}
        <div className="footer-brand-section">
          <div className="brand-content">
            <div className="brand-header">
              <FaBuilding className="brand-icon" />
              <h3 className="brand-title">{COMPANY_INFO.SHORTNAME}</h3>
            </div>
            <p className="brand-tagline">{COMPANY_INFO.NAME}</p>
            <p className="brand-tagline">
              Your Gateway to Premium Real Estate in Dhaka
            </p>
            <p className="brand-description">
              Transforming dreams into addresses since 2019. Experience luxury
              living with complete legal assurance and premium amenities.
            </p>

            {/* Trust Metrics */}
            <div className="trust-metrics">
              <div className="metric">
                <span className="metric-value">{STATS.PROJECTS_COMPLETED}</span>
                <span className="metric-label">Projects</span>
              </div>
              <div className="metric">
                <span className="metric-value">99%</span>
                <span className="metric-label">Client Satisfaction</span>
              </div>
              <div className="metric">
                <span className="metric-value">{STATS.YEARS_EXPERIENCE}</span>
                <span className="metric-label">Years Experience</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="newsletter-section">
              <h4>Stay Updated</h4>
              <p>Get exclusive property insights and market updates</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Sections - Right Side */}
        <div className="footer-nav-sections">
          {/* Quick Access Tabs */}
          <div className="footer-tabs">
            <button
              className={`tab-btn ${
                activeSection === "properties" ? "active" : ""
              }`}
              onClick={() => setActiveSection("properties")}
            >
              <FaHome />
              Properties
            </button>
            <button
              className={`tab-btn ${
                activeSection === "services" ? "active" : ""
              }`}
              onClick={() => setActiveSection("services")}
            >
              <GiReceiveMoney />
              Services
            </button>
            <button
              className={`tab-btn ${
                activeSection === "resources" ? "active" : ""
              }`}
              onClick={() => setActiveSection("resources")}
            >
              <FaChartLine />
              Resources
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Properties Tab */}
            {activeSection === "properties" && (
              <div className="tab-panel">
                <div className="nav-column">
                  <h4>Property Types</h4>
                  <div className="nav-links-grid">
                    {PROPERTY_TYPES.map((property, index) => (
                      <a
                        key={index}
                        href={property.url}
                        className="nav-link-card"
                      >
                        <span className="nav-icon">{property.icon}</span>
                        <span className="nav-text">{property.name}</span>
                        <FaChevronRight className="nav-arrow" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="nav-column">
                  <h4>Popular Locations</h4>
                  <div className="nav-links-grid">
                    {POPULAR_LOCATIONS.map((location, index) => (
                      <a
                        key={index}
                        href={location.url}
                        className="nav-link-card"
                      >
                        <span className="nav-icon">{location.icon}</span>
                        <span className="nav-text">{location.name}</span>
                        <FaChevronRight className="nav-arrow" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeSection === "services" && (
              <div className="tab-panel">
                <div className="nav-column">
                  <h4>Our Services</h4>
                  <div className="nav-links-grid">
                    {SERVICES.map((service, index) => (
                      <a
                        key={index}
                        href={service.url}
                        className="nav-link-card"
                      >
                        <span className="nav-icon">{service.icon}</span>
                        <span className="nav-text">{service.name}</span>
                        <FaChevronRight className="nav-arrow" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="nav-column">
                  <h4>Quick Links</h4>
                  <div className="nav-links-grid">
                    {QUICK_LINKS.map((link, index) => (
                      <a key={index} href={link.url} className="nav-link-card">
                        <span className="nav-icon">{link.icon}</span>
                        <span className="nav-text">{link.name}</span>
                        <FaChevronRight className="nav-arrow" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Resources Tab */}
            {activeSection === "resources" && (
              <div className="tab-panel">
                <div className="nav-column">
                  <h4>Government Portals</h4>
                  <div className="resource-links">
                    {GOVERNMENT_PORTALS.map((portal, index) => (
                      <a
                        key={index}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        {portal.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="nav-column">
                  <h4>Banking Partners</h4>
                  <div className="resource-links">
                    {BANKING_PARTNERS.map((bank, index) => (
                      <a
                        key={index}
                        href={bank.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        <FaUniversity className="resource-icon" />
                        {bank.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="nav-column">
                  <h4>Utility Services</h4>
                  <div className="resource-links">
                    {UTILITY_SERVICES.map((utility, index) => (
                      <a
                        key={index}
                        href={utility.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        <span className="utility-icon">{utility.icon}</span>
                        {utility.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact & Social Bar */}
      <div className="footer-contact-bar">
        <div className="contact-info-compact">
          <div className="contact-item-compact">
            <FaPhone className="contact-icon" />
            <span>{COMPANY_INFO.PHONE}</span>
          </div>
          <div className="contact-item-compact">
            <FaEnvelope className="contact-icon" />
            <span>{COMPANY_INFO.EMAIL}</span>
          </div>
          <div className="contact-item-compact">
            <FaMapMarkerAlt className="contact-icon" />
            <span>{COMPANY_INFO.ADDRESS}</span>
          </div>
        </div>

        <div className="social-payment-compact">
          <div className="social-links-compact">
            {[
              {
                Icon: FaFacebookF,
                url: `https://facebook.com/${SOCIAL.FACEBOOK}`,
              },
              {
                Icon: FaInstagram,
                url: `https://instagram.com/${SOCIAL.INSTA}`,
              },
              {
                Icon: FaLinkedinIn,
                url: `https://linkedin.com/${SOCIAL.LINK}`,
              },
              { Icon: FaYoutube, url: `https://youtube.com/${SOCIAL.YOUTUBE}` },
              {
                Icon: FaWhatsapp,
                url: `https://api.whatsapp.com/send?phone=${SOCIAL.WHATSAPP}`,
              },
            ].map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                className="social-link-compact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>
          <div className="payment-methods-compact">
            <span>We Accept:</span>
            <div className="payment-icons-compact">
              <FaCreditCard />
              <FaUniversity />
              <FaMobileAlt />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-modern">
        <div className="footer-bottom-content">
          <div className="legal-links-modern">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Disclaimer",
              "Sitemap",
            ].map((link, index) => (
              <a
                key={index}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="legal-link"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="copyright-modern">
            {/* <p> {COMPANY_INFO.NAME}</p> */}
            <p>
              © 2025 All Rights Reserved. Site designed and maintained by NRED
              IT branch.
            </p>
          </div>

          <div className="trust-badges-compact">
            <div className="trust-badge">
              <FaShieldAlt />
              <span>SSL Secured</span>
            </div>
            <div className="trust-badge">
              <FaTrophy />
              <span>Trusted organization</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
