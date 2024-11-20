import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {

  return (
    <header className="header-container" >
      <div>
        <Link to="/">
          <div className='header-logo'>
            JMsoft
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
