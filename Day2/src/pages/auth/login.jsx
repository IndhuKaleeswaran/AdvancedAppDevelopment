import React, { useState } from 'react';
import '../../assets/css/login.css';
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log('Logging in with:', username, password);
  };

  return (
    
    <div className='log_body'>
    <div className="login-container">
      <div className="login-form">
        <h2 className='login-head'>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <h5><button type="submit" className='but'>LOGIN</button></h5>
        <p>Don't have an Account? Register</p>
      </div>
  </div>
    </div>
    
  );
};

export default Login;