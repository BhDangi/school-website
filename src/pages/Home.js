// src/pages/Home.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="Springdale Public School Logo" style={{ width: '150px', height: 'auto' }} />
        <h1>Springdale Public School</h1>
        <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </header>

      <section>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Annual+Sports+Day"
              alt="Annual Sports Day"
            />
            <Carousel.Caption>
              <h3>Annual Sports Day - Celebrating Excellence in Sports</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Science+Exhibition"
              alt="Science Exhibition"
            />
            <Carousel.Caption>
              <h3>Science Exhibition - Showcasing Student Innovations</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Cultural+Fest"
              alt="Cultural Fest"
            />
            <Carousel.Caption>
              <h3>Cultural Fest - Embracing Diversity and Creativity</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <footer>
        <nav>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
