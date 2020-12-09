import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <ul className="topnav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="right">
        <Link to="/signup">Sign Up</Link>
      </li>
      <li className="right">
        <Link to="/login">Log In</Link>
      </li>
    </ul>
  );
}

export default Header;
