// React Component - Fixed Luxury Navigation with Link Components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navigation.css";
import { COMPANY_INFO, ASSETS } from "./basicinfo.js";

// Text Content Variables
const COMPANY_NAME = COMPANY_INFO.NAME;
const COMPANY_SLOGAN = COMPANY_INFO.SLOGAN;
const CONTACT_INFO = COMPANY_INFO.ADDRESS;
const PHONE_NUMBER = COMPANY_INFO.PHONE;
const LOGOSOURCE = ASSETS.LOGO;

// Navigation Data with proper URLs
const MAIN_MENU_ITEMS = [
  {
    title: "Home",
    link: "/",
    icon: "🏠",
  },
  {
    title: "About Us",
    link: "/about-us",
    submenu: [
      { title: "Company Profile", link: "/company-profile" },
      { title: "Our History & Journey", link: "/our-history-journey" },
      { title: "Board of Directors", link: "/board-of-directors" },
      { title: "Management Team", link: "/management-team" },
      { title: "Managing Director's Message", link: "/managing-director-message" },
      { title: "Mission, Vision & Values", link: "/mission-vision-values" },
      { title: "Corporate Philosophy", link: "/corporate-philosophy" },
      { title: "Quality Assurance", link: "/quality-assurance" },
      { title: "CSR Activities", link: "/csr-activities" },
      { title: "Awards & Recognition", link: "/awards-recognition" },
    ],
  },
  {
    title: "Projects",
    link: "/projects",
    submenu: [
      { title: "All Projects", link: "/all-projects" },
      { title: "Residential Projects", link: "/residential-projects" },
      { title: "Commercial Projects", link: "/commercial-projects" },
      { title: "Mixed-Use Projects", link: "/mixed-use-projects" },
      { title: "Ongoing Projects", link: "/ongoing-projects" },
      { title: "Completed Projects", link: "/completed-projects" },
      { title: "Upcoming Projects", link: "/upcoming-projects" },
      { title: "Featured Projects", link: "/featured-projects" },
      { title: "Signature Projects", link: "/signature-projects" },
    ],
  },
  {
    title: "Properties",
    link: "/properties",
    submenu: [
      { title: "Buy Properties", link: "/buy-properties" },
      { title: "Rent Properties", link: "/rent-properties" },
      { title: "Luxury Properties", link: "/luxury-properties" },
      { title: "Budget Properties", link: "/budget-properties" },
      { title: "Commercial Properties", link: "/commercial-properties" },
      { title: "Investment Properties", link: "/investment-properties" },
      { title: "Residential Apartments", link: "/residential-apartments" },
      { title: "Commercial Spaces", link: "/commercial-spaces" },
      { title: "Plots & Land", link: "/plots-land" },
    ],
  },
  {
    title: "Services",
    link: "/services",
    submenu: [
      { title: "Property Buying Assistance", link: "/property-buying-assistance" },
      { title: "Property Selling Assistance", link: "/property-selling-assistance" },
      { title: "Property Valuation", link: "/property-valuation" },
      { title: "Home Inspection", link: "/home-inspection" },
      { title: "Legal Services", link: "/legal-services" },
      { title: "Property Management", link: "/property-management" },
      { title: "Construction Services", link: "/construction-services" },
      { title: "Interior Design", link: "/interior-design" },
    ],
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const LuxuryNavigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      !isDarkMode ? "dark" : "light"
    );
  };

  const handleMenuHover = (index) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`luxury-nav ${isDarkMode ? "dark-mode" : "light-mode"} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      {/* Top Bar */}
      <div className="nav-top-bar">
        <div className="container">
          <div className="top-bar-content">
            <span className="company-info">
              <svg
                className="icon location-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {CONTACT_INFO}
            </span>
            <div className="top-bar-right">
              <span className="phone">
                <svg
                  className="icon phone-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                </svg>
                {PHONE_NUMBER}
              </span>
              <button
                className="dark-mode-toggle"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                <svg
                  className="theme-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {isDarkMode ? (
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM6.34 5.16l-1.42 1.42c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.42-1.42c.39-.39.39-1.02 0-1.41-.38-.39-1.02-.39-1.41 0zm0 13.66l-1.42-1.42c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41zm13.66 0l1.42-1.42c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.42 1.42c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0zm0-13.66l1.42 1.42c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-1.42-1.42c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0z" />
                  ) : (
                    <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="nav-main">
        <div className="container">
          {/* Logo and Brand */}
          <div className="nav-brand">
            <div className="logo-container">
              <Link to="/">
                <img
                  src={LOGOSOURCE}
                  alt={COMPANY_NAME}
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              </Link>
              <div className="logo-fallback" style={{ display: "none" }}>
                <Link to="/" className="brand-link">
                  <h1 className="brand-name">{COMPANY_NAME}</h1>
                  <p className="brand-slogan">{COMPANY_SLOGAN}</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <ul className="main-menu">
              {MAIN_MENU_ITEMS.map((item, index) => (
                <li
                  key={index}
                  className={`menu-item ${
                    activeMenu === index ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMenuHover(index)}
                  onMouseLeave={handleMenuLeave}
                >
                  {/* Converted to Link */}
                  <Link to={item.link} className="menu-link">
                    {item.title}
                    {item.submenu && (
                      <svg
                        className="dropdown-arrow"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    )}
                  </Link>

                  {item.submenu && (
                    <div className="mega-menu">
                      <div className="mega-menu-content">
                        <div className="mega-menu-grid">
                          {item.submenu.map((subItem, subIndex) => (
                            // Converted to Link
                            <Link
                              key={subIndex}
                              to={subItem.link}
                              className="mega-menu-item"
                              onClick={closeMobileMenu}
                            >
                              <span className="menu-item-text">{subItem.title}</span>
                              <svg
                                className="arrow-icon"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                        <div className="mega-menu-featured">
                          <div className="featured-property">
                            <h4>Featured Property</h4>
                            <p>Luxury 4BHK Apartment in Prime Location</p>
                            {/* Converted to Link */}
                            <Link to="/featured-property" className="view-details-btn">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Search and Actions */}
          <div className="nav-actions">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search properties..."
                className="search-input"
              />
              <button className="search-btn" aria-label="Search">
                <svg
                  className="search-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </button>
            </div>
            {/* Converted to Link */}
            <Link to="/contact" className="cta-button">
              <svg
                className="phone-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
              </svg>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Menu</h3>
          <button
            className="close-mobile-menu"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
        <div className="mobile-menu-content">
          {MAIN_MENU_ITEMS.map((item, index) => (
            <div key={index} className="mobile-menu-item">
              {/* Converted to Link */}
              <Link
                to={item.link}
                className="mobile-menu-link"
                onClick={closeMobileMenu}
              >
                {item.title}
              </Link>
              {item.submenu && (
                <div className="mobile-submenu">
                  {item.submenu.map((subItem, subIndex) => (
                    // Converted to Link
                    <Link
                      key={subIndex}
                      to={subItem.link}
                      className="mobile-submenu-item"
                      onClick={closeMobileMenu}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default LuxuryNavigation;