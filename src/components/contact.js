import React from "react";
import { COMPANY_INFO, ASSETS, SOCIAL_MEDIA } from "./basicinfo.js";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <img src={ASSETS.LOGO} alt={COMPANY_INFO.SHORTNAME} className="contact-logo" />
      <h1 className="contact-title">{COMPANY_INFO.NAME}</h1>
      <p className="contact-slogan">{COMPANY_INFO.SLOGAN}</p>
      <p className="contact-description">{COMPANY_INFO.DESCRIPTION}</p>

      <div className="contact-info">
        <p><strong>Address:</strong> {COMPANY_INFO.ADDRESS}</p>
        <p><strong>Phone:</strong> {COMPANY_INFO.PHONE}</p>
        <p><strong>Email:</strong> {COMPANY_INFO.EMAIL}</p>
        <p><strong>Website:</strong> <a href={COMPANY_INFO.WEBSITE}>{COMPANY_INFO.WEBSITE}</a></p>
      </div>

      <div className="contact-links">
        <a href={SOCIAL_MEDIA.FACEBOOK}>Facebook</a>
        <a href={SOCIAL_MEDIA.LINKEDIN}>LinkedIn</a>
        <a href={SOCIAL_MEDIA.INSTAGRAM}>Instagram</a>
        <a href={SOCIAL_MEDIA.TWITTER}>Twitter</a>
      </div>

      <p className="contact-footer">
        © {new Date().getFullYear()} {COMPANY_INFO.SHORTNAME}. All rights reserved.
      </p>
    </div>
  );
}

export default Contact;
