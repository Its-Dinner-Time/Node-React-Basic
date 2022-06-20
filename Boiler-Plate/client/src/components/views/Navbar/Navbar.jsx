import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/login">Sign in</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
