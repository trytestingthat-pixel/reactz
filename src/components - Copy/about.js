import React, { useState, useEffect } from "react";
import "./about.css";


const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Content Variables
  const pageContent = {
    // Hero Section
    hero: {
      badge: "About Our Company",
      title: "Building Excellence Since 2010",
      subtitle:
        "We are a premier real estate development company committed to creating exceptional living and working spaces that redefine urban landscapes.",
      stats: [
        { number: "500+", label: "Projects Completed" },
        { number: "50+", label: "Awards Won" },
        { number: "10,000+", label: "Happy Clients" },
        { number: "15+", label: "Years Experience" },
      ],
    },

    // Mission & Vision
    missionVision: {
      mission: {
        title: "Our Mission",
        description:
          "To create sustainable, innovative, and high-quality real estate developments that enhance communities and provide exceptional value to our clients, while maintaining the highest standards of integrity and professionalism.",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      vision: {
        title: "Our Vision",
        description:
          "To be the most trusted and innovative real estate developer in the region, recognized for transforming skylines and creating lasting value for generations to come through visionary projects and unparalleled customer service.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    },

    // Our Story
    ourStory: {
      title: "Our Journey",
      subtitle: "From humble beginnings to industry leadership",
      timeline: [
        {
          year: "2010",
          title: "Foundation",
          description:
            "Started with a single residential project, laying the foundation for our commitment to quality and excellence.",
          image:
            "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
          year: "2014",
          title: "Expansion",
          description:
            "Expanded into commercial real estate, delivering our first premium office tower that set new standards in the industry.",
          image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
          year: "2018",
          title: "Innovation",
          description:
            "Pioneered sustainable building practices and smart home technologies in our developments.",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
          year: "2023",
          title: "Leadership",
          description:
            "Recognized as industry leaders with multiple award-winning projects and international partnerships.",
          image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },

    // Values
    ourValues: {
      title: "Our Values",
      subtitle: "The principles that guide everything we do",
      values: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1000/1000949.png",
          title: "Integrity",
          description:
            "We conduct business with honesty, transparency, and ethical practices, building trust with every stakeholder.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
          title: "Innovation",
          description:
            "We embrace new technologies and creative solutions to deliver cutting-edge real estate developments.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3190/3190625.png",
          title: "Quality",
          description:
            "We never compromise on quality, using the best materials and craftsmanship in every project.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1006/1006555.png",
          title: "Sustainability",
          description:
            "We are committed to environmentally responsible development that benefits communities and the planet.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          title: "Customer Focus",
          description:
            "Our clients are at the heart of everything we do, and their satisfaction is our ultimate measure of success.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1995/1995542.png",
          title: "Excellence",
          description:
            "We strive for excellence in every detail, from design and construction to customer service.",
        },
      ],
    },

    // Team Section
    ourTeam: {
      title: "Leadership Team",
      subtitle: "Meet the visionaries behind our success",
      members: [
        {
          name: "Sarah Johnson",
          position: "CEO & Founder",
          bio: "With over 20 years in real estate development, Sarah leads our company with vision and passion.",
          image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          social: {
            linkedin: "#£££££££££",
            twitter: "#",
          },
        },
        {
          name: "Michael Chen",
          position: "Chief Operations Officer",
          bio: "Michael ensures our projects are delivered on time, within budget, and to the highest standards.",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          social: {
            linkedin: "#",
            twitter: "#",
          },
        },
        {
          name: "Elena Rodriguez",
          position: "Head of Design",
          bio: "Elena brings innovative design concepts that blend functionality with aesthetic excellence.",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          social: {
            linkedin: "#",
            twitter: "#",
          },
        },
        {
          name: "David Kim",
          position: "Finance Director",
          bio: "David manages our financial strategy and ensures sustainable growth across all operations.",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          social: {
            linkedin: "#",
            twitter: "#",
          },
        },
      ],
    },

    // CTA Section
    callToAction: {
      title: "Ready to Start Your Journey With Us?",
      subtitle:
        "Join thousands of satisfied clients who have trusted us with their real estate needs.",
      buttons: [
        { text: "View Our Projects", type: "primary", link: "#" },
        { text: "Contact Us", type: "secondary", link: "#" },
      ],
    },
  };

  return (
    <div className={`about-us-page ${isVisible ? "visible" : ""}`}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="section-badge">
              <span>{pageContent.hero.badge}</span>
            </div>
            <h1 className="hero-title">{pageContent.hero.title}</h1>
            <p className="hero-subtitle">{pageContent.hero.subtitle}</p>

            <div className="stats-grid">
              {pageContent.hero.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-image">
                <img
                  src={pageContent.missionVision.mission.image}
                  alt="Our Mission"
                />
              </div>
              <div className="card-content">
                <h3>{pageContent.missionVision.mission.title}</h3>
                <p>{pageContent.missionVision.mission.description}</p>
              </div>
            </div>

            <div className="vision-card">
              <div className="card-image">
                <img
                  src={pageContent.missionVision.vision.image}
                  alt="Our Vision"
                />
              </div>
              <div className="card-content">
                <h3>{pageContent.missionVision.vision.title}</h3>
                <p>{pageContent.missionVision.vision.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <h2>{pageContent.ourStory.title}</h2>
            <p>{pageContent.ourStory.subtitle}</p>
          </div>

          <div className="timeline">
            {pageContent.ourStory.timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <div className="timeline-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="timeline-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>{pageContent.ourValues.title}</h2>
            <p>{pageContent.ourValues.subtitle}</p>
          </div>

          <div className="values-grid">
            {pageContent.ourValues.values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <img src={value.icon} alt={value.title} />
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>{pageContent.ourTeam.title}</h2>
            <p>{pageContent.ourTeam.subtitle}</p>
          </div>

          <div className="team-grid">
            {pageContent.ourTeam.members.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p className="position">{member.position}</p>
                  <p className="bio">{member.bio}</p>
                  <div className="social-links">
                    <a  href={member.social.linkedin} aria-label="LinkedIn">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                        alt="LinkedIn"
                      />
                     </a>
                    <a href={member.social.twitter} aria-label="Twitter">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                        alt="Twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{pageContent.callToAction.title}</h2>
            <p>{pageContent.callToAction.subtitle}</p>
            <div className="cta-buttons">
              {pageContent.callToAction.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`cta-btn ${
                    button.type === "primary" ? "primary" : "secondary"
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
