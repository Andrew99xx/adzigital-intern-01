import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  };

  return (
    <header className="Header">
      <div className="Container">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className="sidebar">
          <li><a href="#About">About</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        <div className="Header_Text">
          <h1>Portfolio</h1>
          <span>by Your Name</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
