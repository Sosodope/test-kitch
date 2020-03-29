import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import LogoIcon from './LogoIcon'

const Header = () => {
  return (
    <div className="header-container">
      <nav>
        {/* <h2>TestKitch</h2> */}
        <LogoIcon />
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
