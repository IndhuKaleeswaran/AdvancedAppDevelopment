import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import '../assets/css/start.css';
import Footer from '../components/Footer';

function Start() {
  return (
    <>
      <body className='start-body'>
        <div>
          <Navbar/>
          <div className="start-content">
            <h1 className='start-h1'>Welcome to Events Park!</h1>
            <p>Your go-to platform for organizing and booking events</p>
            <p className='start-p'>Events Park, where memorable experiences await! Whether you're a passionate event organizer or someone simply seeking excitement, our platform is your gateway to a world of entertainment and enrichment. From electrifying concerts to insightful conferences and everything in between, Events Park offers a seamless experience for discovering, organizing, and booking events. Join us on a journey of discovery, where every event becomes an opportunity to create lasting memories and connect with like-minded individuals. Start exploring today and unlock a universe of possibilities with Events Park.</p>
            <Link to="/events" className="explore-events-btn">Explore Events</Link>
          </div>
          <Footer/>
        </div>
      </body>
    </>
  );
}

export default Start;
