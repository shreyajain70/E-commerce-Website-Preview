import React from "react";
import { FaShoppingBag, FaBullseye, FaHeart } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="aboutus-page">
      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            We are more than just an e-commerce store — we’re a community built on trust,
            quality, and passion.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mvv-section">
        <div className="mvv-card">
          <FaShoppingBag className="mvv-icon" />
          <h3>Our Mission</h3>
          <p>
            Deliver premium products with unmatched customer experience and
            sustainable practices.
          </p>
        </div>
        <div className="mvv-card">
          <FaBullseye className="mvv-icon" />
          <h3>Our Vision</h3>
          <p>
            To be the go-to platform for quality shopping worldwide, inspiring
            millions to shop smarter.
          </p>
        </div>
        <div className="mvv-card">
          <FaHeart className="mvv-icon" />
          <h3>Our Values</h3>
          <p>
            Integrity, customer satisfaction, and innovation are the core of
            everything we do.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {[
            { name: "Aarav Mehta", role: "Founder & CEO", img: "https://via.placeholder.com/200" },
            { name: "Riya Sharma", role: "Head of Marketing", img: "https://via.placeholder.com/200" },
            { name: "Karan Patel", role: "Lead Developer", img: "https://via.placeholder.com/200" },
          ].map((member, i) => (
            <div key={i} className="team-card">
              <img src={member.img} alt={member.name} />
              <div className="team-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
