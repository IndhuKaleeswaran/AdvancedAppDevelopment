import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/auth/register';
import Login from './pages/auth/login';
import Home from './pages/Home';
import Events from './pages/events';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/events' element={<Events/>}/>
      </Routes>
    </Router>
  );
}

export default App;
