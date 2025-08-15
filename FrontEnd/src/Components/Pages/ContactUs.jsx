import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>📞 Get in Touch</h1>
        <p>We’re here to help you with anything — from orders to product info!</p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email Us</h3>
            <p>support@yourecommerce.com</p>
          </div>
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Visit Us</h3>
            <p>123, Blue Street, New Delhi, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
