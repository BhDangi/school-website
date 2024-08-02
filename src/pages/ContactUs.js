// src/pages/ContactUs.js
import React from 'react';
import '../styles/ContactUs.css'; // Assuming you will add CSS styles for the Contact Us page

const ContactUs = () => {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
      </header>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
      </section>

      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>

      <section className="map">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.904918989236!2d90.39861461533727!3d23.771120684585832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75f645e5c91%3A0x2c0a83b8c1d27c35!2sDhaka%20City%2C%20Dhaka%20Division%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1634519807445!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="School Location"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
