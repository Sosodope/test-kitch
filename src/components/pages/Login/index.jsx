import React from 'react';
import './style.css'

const Login = () => {
  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-wrapper">
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='abc@email.com' />

            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='password' />

            <button type="button">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
