import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/events.css';

function Events() {
  return (
    <body className='event-body'>
    <div>
      <Navbar/>
      <div className="events-container">
        <h1 className='event-h1'>Upcoming Events...</h1><br/>
        <div className="event">
          <h2>Event 1</h2>
          <p>Date: January 15, 2025</p>
          <p>Time: 10:00 AM - 5:00 PM</p>
          <p>Location: Conference Hall A</p>
          <p>Entry Fee(per head): Rs.300</p>
          <button>Book Tickets</button>
        </div>
        <div className="event">
          <h2>Event 2</h2>
          <p>Date: February 20, 2025</p>
          <p>Time: 11:00 AM - 6:00 PM</p>
          <p>Location: Exhibition Center</p>
          <p>Entry Fee(per head): Rs.250</p>
          <button>Book Tickets</button>
        </div>
        <div className="event">
          <h2>Event 3</h2>
          <p>Date: March 25, 2025</p>
          <p>Time: 12:00 PM - 7:00 PM</p>
          <p>Location: Outdoor Amphitheater</p>
          <p>Entry Fee(per head): Rs.500</p>
          <button>Book Tickets</button>
        </div>
        <div className="event">
          <h2>Event 4</h2>
          <p>Date: April 30, 2025</p>
          <p>Time: 2:00 PM - 9:00 PM</p>
          <p>Location: Ballroom C</p>
          <p>Entry Fee(per head): Rs.200</p>
          <button>Book Tickets</button>
        </div>
      </div>
    </div>
    </body>
  );
}

export default Events;
