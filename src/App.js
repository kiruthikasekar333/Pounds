import React, { useState } from 'react';
import Login from './login';
import Register from './register';
import './App.css';
import Banner1 from '../src/images/banner1.jpg';
import Banner2 from '../src/images/banner.jpg'; // Import another banner image

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [statusText, setStatusText] = useState("Login with Pounds.");
  const [loginBtnStyle, setLoginBtnStyle] = useState({
    backgroundColor: '#117A7A',
    color: '#ffffff'
  });
  const [registerBtnStyle, setRegisterBtnStyle] = useState({});
  const [bannerImage, setBannerImage] = useState(Banner1); // Initial image source

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
    setStatusText("Login with Pounds.");
    setLoginBtnStyle({ backgroundColor: '#117A7A', color: '#ffffff' });
    setRegisterBtnStyle({});
    setBannerImage(Banner1); // Set the image source for login
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
    setStatusText("Register with The Pounds.");
    setLoginBtnStyle({});
    setRegisterBtnStyle({ backgroundColor: '#117A7A', color: '#ffffff' });
    setBannerImage(Banner2); // Set the image source for register
  };

  return (
    <div className='App'>

      <div className='login-card'>
        <div className='left-card'>
          <img src={bannerImage} alt="Banner" className="banner"/>
        </div>
        <div className='right-card'>
          <p className='p-message'>{statusText}</p>
          <div className="buttons">
            <button onClick={handleLoginClick} className='login-btn' style={loginBtnStyle}>Login</button>
            <button onClick={handleRegisterClick} className='register-btn' style={registerBtnStyle}>Register</button>
          </div>
          <div className="card">
            {showLogin && <Login />}
            {showRegister && <Register />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
