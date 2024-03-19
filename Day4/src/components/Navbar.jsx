import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as VscIcons from "react-icons/vsc";

import '../assets/css/Navbar.css';

export default function Navbar() {
  return (
    <div className='full_sidebar'>
      <div className="navbar">
        <div className="nav1">
          <ul>
            <li><Link to='/start'>HOME</Link></li>
            <li><Link to='/events'>EVENTS</Link></li>
            <li><Link to='/login'>SERVICES</Link></li>
            <li><Link to='/'>LOGOUT</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}