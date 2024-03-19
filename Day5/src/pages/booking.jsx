import React, { useState } from 'react';
import '../assets/css/booking.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'; 


const Booking = () => {
  const [numPersons, setNumPersons] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleNumPersonsChange = (e) => {
    setNumPersons(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleAgreementChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      // Process booking
      console.log('Booking confirmed!');
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <div>
    <Navbar/><br/><br/><br/>
    <div className='book'>
    <div>

      <div className='booking-page-container'>
        <h1 className='booking-head'>Book Tickets</h1>
        <form onSubmit={handleSubmit} className='booking-form'>
          <div className="form-book">
            <label htmlFor="numPersons">Number of Persons:</label>
            <input
              type="number"
              id="numPersons"
              value={numPersons}
              onChange={handleNumPersonsChange}
              className='form-input'
            />
          </div>
          <div className="form-book">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              className='form-input'
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="netbanking">NetBanking</option>
              <option value="upi">UPI</option>
            </select>
          </div>
          <div className="form-book">
            <label>
              <input
                type="checkbox"
                checked={agreed}
                onChange={handleAgreementChange}
              />
              I agree to the terms and conditions
            </label>
          </div>
          <Link to='/start'><button type="submit" className='submit-btn'>Continue</button></Link>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Booking;
