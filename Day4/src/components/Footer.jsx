import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, Link } from 'react-router-dom'


import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
        <div className="footer-section">
        <h3>About Us</h3>
        <p className='about'>
          <br/>
          Welcome to Events Park, your go-to platform for organizing and booking events. Whether you're planning a concert, conference, or special celebration, we're here to make the process seamless and enjoyable for you.
          <br/><br/>
          At Events Park, we understand the importance of creating memorable experiences. Our dedicated team works tirelessly to ensure that every event is a success, from start to finish. With our user-friendly interface and extensive event listings, finding and booking your next event has never been easier.
          <br/><br/>
          Join us at Events Park and let's make your event dreams a reality. 
          <br/><br/><br/>
        </p>
        <p className='tq'>Thank You.</p>
      </div>
      
          <div className="footer-section">
          <h4 className='foot-head'>Events  Park</h4>
            <ul className='footer-center'>
              <li><Link to='/terms' >Terms & Conditions</Link></li>
              <br/>
              <li><Link to='/privacypolicy'>Privacy Policy</Link></li>
              <br/>
              <li><Link to='/faq'>FAQs</Link></li>
              </ul>
            <div className="social-media-icons">
            <p>Reach out to us on:</p><br/>
                <a href="https://www.instagram.com" className='sm-icon1'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com" className='sm-icon1'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.facebook.com" className='sm-icon1'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <br/>
            <p>Contact: 9876543210</p>
            <br/>
            <p>Email: eventspark@gmail.com</p>
            <br/>
            <p>Website: www.eventspark.in</p>
            <br/>
            <p>Address:</p>
            <p className='add'>No.123 events street,</p>
            <p className='add'>Race course,</p>
            <p className='add'>Coimbatore-641018</p>
            <br/>
            <p>For Queries & Suggestions:</p>
            <Link to='/feedback' className='foot-links-feed' >Feedback Form</Link>            
            </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Events Park. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
