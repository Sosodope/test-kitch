import React from 'react';
import './style.css'

const Signup = () => {
  return (
    <div className="page-container">
      <div className="signup-container">
        <div className="signup-wrapper">
          <form>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name='fullname' placeholder='full name' />

            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='abc@email.com' />

            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='password' />

            <button type="button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
