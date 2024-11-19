import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleMouseEnter = (e) => {
    setMenuOpen(true);
    e.preventDefault();
  };

  const handleMouseLeave = (e) => {
    setMenuOpen(false);
    e.preventDefault();
  };

  const handleHeaderMouseEnter = (e) => {
    setMenuOpen(true);
    e.preventDefault();
  };

  const handleHeaderMouseLeave = (e) => {
    setMenuOpen(false);
    e.preventDefault();
  };

  return (
    <header className="header-container" onMouseEnter={handleHeaderMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <Link to="/">
          <div className='header-logo'>
            JM
          </div>
        </Link>
      </div>
      <div className="btn-container">
        <button className='header-button'>About</button>
        <button className='header-button'>Contact</button>
        <button className='header-button'>News</button>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <div className='menu-item-container'>
            <span className='menu-item-title'>About</span>
            <Link to="/devstory" className="menu-item">개발자 스토리</Link>
            <Link to="/awards" className="menu-item">Awards</Link>
            <Link to="" className="menu-item">도전의 역사</Link>
          </div>
          <div className='menu-item-container'>
            <span className='menu-item-title'>Contact</span>
            <Link to="https://github.com/hshy1839" target="_blank" className="menu-item">Github</Link>
            <Link to="https://www.instagram.com/seokhyung98/" target="_blank" className="menu-item">Instagram</Link>
            <Link to="mailto:hongjeongmin1839@google.com" target="_blank" className="menu-item">Mail</Link>
          </div>
          <div className='menu-item-container'>
            <span className='menu-item-title'>News</span>
            <Link to="" className="menu-item">공지사항</Link>
            <Link to="" className="menu-item">QnA</Link>
            <Link to="" className="menu-item">게시판</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
