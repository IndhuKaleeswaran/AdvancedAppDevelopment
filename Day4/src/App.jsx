import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/auth/register';
import Login from './pages/auth/login';
import Home from './pages/Home';
import Events from './pages/events';
import Booking from './pages/booking';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/terms';
import Feedback from './pages/Feedback';
import Faq from './pages/Faq';
import Start from './pages/start';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/events' element={<Events/>}/>
        <Route exact path='/booking' element={<Booking/>}/>
        <Route exact path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route exact path='/terms' element={<Terms/>}/>
        <Route exact path='/feedback' element={<Feedback/>}/>
        <Route exact path='/faq' element={<Faq/>}/>
        <Route exact path='/start' element={<Start/>}/>
      </Routes>
    </Router>
  );
}

export default App;
