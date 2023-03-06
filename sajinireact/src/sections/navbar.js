import React, { useState } from 'react';
import '../App.css'
import 'bulma/css/bulma.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: 'black', paddingRight: '5%'}}>
      <div className="navbar-brand">
        <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <a className="navbar-item">
            Home
          </a>
          <a className="navbar-item">
            Front-end skills
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Skills
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item">
                Back-end skills
              </a>
            </div>
          </div>
          <a className="navbar-item">
            Portfolio
          </a>
          <a className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
