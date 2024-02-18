import React from "react";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing-page">
      <section id="home" className="hero-section">
        {/* You can replace these image URLs with your own */}
        <div className="background-image"></div>
        <div className="overlay"></div>
        <div className="content">
          <h1>Welcome to Our Home Safety Services</h1>
          <p>Ensuring a safe environment for your loved ones.</p>
        </div>
      </section>

      <section id="question" className="about-section"></section>

      <section id="input" className="services-section"></section>

      <section id="results" className="contact-section"></section>
    </div>
  );
};

export default Landing;
