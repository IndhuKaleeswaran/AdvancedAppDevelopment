import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/events.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; 



function Events() {
  return (
    <>
    <body className='event-body'>
    <div>
      <Navbar/>
      <div className="events-container">
        <h1 className='event-h1'>Upcoming Events...</h1><br/>
        <div className="event">
          <img src="https://t4.ftcdn.net/jpg/06/72/63/17/360_F_672631735_DIcCPDFe1ya7cyFoIzL3CdArjg0tVjmr.jpg" alt="Event 1" className="event-image" />
          <h2>New Year Party</h2>
          <p>Date: January 01, 2025</p>
          <p>Time: 10:00 PM - 2:00 AM</p>
          <p>Location: Party Hall A- Codissia</p>
          <p>Entry Fee(per head): Rs.300</p>
         <Link to='/booking'> <button >Book Tickets</button></Link>
        </div>
        <div className="event">
        <img src="https://preciousmemoriespreschoolofsandyhollow.com/wp-content/uploads/2020/02/valentines-day-party-digital-banners-2019-january_700x500.png" width="500px" alt="Event 3" className="event-image" />

          <h2>Valentine Party</h2>
          <p>Date: February 14, 2025</p>
          <p>Time: 11:00 AM - 6:00 PM</p>
          <p>Location: Roof Top Restaurant,RaceCourse</p>
          <p>Entry Fee(per head): Rs.250</p>
          <Link to='/booking'> <button >Book Tickets</button></Link>
          </div>
        <div className="event">
          <img src="https://www.suas.ac.in/wp-content/uploads/2018/08/womens-day-Celebrations.jpg" width="500px" alt="Event 3" className="event-image" />
          <h2>Women's Day Event</h2>
          <p>Date: March 08, 2025</p>
          <p>Time: 12:00 PM - 7:00 PM</p>
          <p>Location: Outdoor Exhibition Hall</p>
          <p>Entry Fee(per head): Rs.500</p>
          <Link to='/booking'> <button >Book Tickets</button></Link>
          </div>
        <div className="event">
          <img src="https://img.freepik.com/free-vector/flat-background-tamil-new-year-celebration_23-2150187330.jpg" height="100px" width="500px" alt="Event 4" className="event-image" />
          <h2>Tamil NewYear Games</h2>
          <p>Date: April 14, 2025</p>
          <p>Time: 2:00 PM - 9:00 PM</p>
          <p>Location: Party Hall C</p>
          <p>Entry Fee(per head): Rs.200</p>
          <Link to='/booking'> <button >Book Tickets</button></Link>
          </div>
      </div>
    </div>
    </body>
    <Footer/>
    </>
  );
}

export default Events;
