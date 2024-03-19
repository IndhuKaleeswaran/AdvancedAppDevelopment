import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

function Home() {
  return (
    <div className="home">
      <h1 className='home-head'>Events Park</h1>
      <div className='desc'>~ A Party Event Management App</div>
      <div className="btn1">
      <Link to="/login">
      Login
    </Link>
          |
    <Link to="/register">
      Register
    </Link>

      </div>
    </div>
  );
}

export default Home;
