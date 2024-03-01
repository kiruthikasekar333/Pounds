import React from 'react'
import GoogleLogo from '../src/images/googlelogo.png';
import './register.css'

const register = () => {
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
    {/* <div className='fname-label'>
<input type='text' placeholder='First Name *' className='fname'/>
<span><input type='text' placeholder='Last Name *' className='lname' /></span>

</div> */}
<div>
<input type='text' placeholder='Name *' className='login-input'/>
</div>


<div>
<input type='text' placeholder='Email id *' className='login-input'/>
</div>
<div>
<input type='text' placeholder='Choose new password *' className='login-input'/>
</div>
<div>
<input type='text' placeholder='Confirm password *' className='login-input'/>
</div>
<div>
<input type='text' placeholder='+91 Mobile number' className='login-input'/>
</div>
<div>
<button className='reg-btn'>Register</button>
</div>
<div className='user'>
Already a Customer?<span className='account'> Login</span>
</div>

    </div>
  
  </div>

  )
}

export default register