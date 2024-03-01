import React from 'react';
import './login.css';
import GoogleLogo from '../src/images/googlelogo.png';

const login = () => {
  return (
    <div className='login-content'>
      <div className='google-content'>
      <button className='google-btn'>
  <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
  
  Google
</button>

      </div>

      <p className='p-tag'>- OR -</p>

      <div className='login-form'>
<div>
<input type='text' placeholder='Enter phone number' className='login-input'/>
</div>
<div>
<button className='pro-btn'>Proceed</button>
</div>
<div className='user'>
  New User ?<span className='account'> Create Account</span>
</div>


      </div>
    
    </div>


  )
}

export default login