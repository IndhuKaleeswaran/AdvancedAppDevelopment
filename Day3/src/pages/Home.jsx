import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/Home.css'; 

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="home-container">
        <h1>Welcome to Event Management</h1>
        <p>Explore and book tickets for upcoming events</p>
        <div className="event-cards">
          {/* Sample event card */}
          <div className="event-card">
            <img src="event_image.jpg" alt="Event" />
            <div className="event-details">
              <h2>Event Title</h2>
              <p>Date: January 1, 2025</p>
              <p>Location: Venue Name</p>
              <button className="book-button">Book Ticket</button>
            </div>
          </div>
          {/* Add more event cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default Home;
